import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProgressBar from '../../molecules/ProgressBar';
import TitleSection from '../../molecules/TitleSection';
import BarChart from '../../molecules/BarChart';
import { Grid } from '../../molecules/Grid';

const data = [
  {
    name: 'MARCH',
    EG: 50,
    Esa: 40,
    BigBoss: 20
  },
  {
    name: 'APRIL',
    EG: 12,
    Esa: 10,
    BigBoss: 100
  },
  {
    name: 'MAY',
    EG: 18,
    Esa: 1,
    BigBoss: 3
  },
  {
    name: 'JUNE',
    EG: 99,
    Esa: 76,
    BigBoss: 21
  }
];
const ticks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const Conversion = ({ conversions, barData }) => (
  <Fragment>
    <TitleSection title="Conversion" />
    <StyledConversions>
      {conversions.map(el => (
        <ProgressBar key={el.text} {...el} />
      ))}
    </StyledConversions>
    <StyledBarArea>
      <BarChart data={barData} ticks={ticks} />
    </StyledBarArea>
  </Fragment>
);

const StyledConversions = styled(Grid)`
  justify-content: space-around;
  margin-top: 15px;
  margin-bottom: 80px;
`;

const StyledBarArea = styled(Grid)`
  justify-content: center;
  align-items: center;
`;

Conversion.propTypes = {
  conversions: PropTypes.array
};

Conversion.defaultProps = {
  conversions: [
    {
      value: 40,
      text: 'PAID LATED',
      colorNeed: '#f9f9f9',
      colorSuccess: 'rgb(76, 175, 80)',
      colorText: 'rgb(76, 175, 80)'
    },
    {
      value: 40,
      text: 'PAID LATE',
      colorNeed: '#f9f9f9',
      colorSuccess: 'rgb(244, 66, 52)',
      colorText: 'rgb(246, 193, 35)'
    },
    {
      value: 20,
      text: 'UNPAID OVERDUE',
      colorNeed: '#f9f9f9',
      colorSuccess: 'rgb(244, 66, 52)',
      colorText: 'rgb(244, 66, 52)'
    }
  ],
  barData: data
};

export default memo(Conversion);
