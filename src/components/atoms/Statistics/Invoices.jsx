import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TitleSection from '../../molecules/TitleSection';
import Invoice from '../../molecules/Invoice';

const Invoices = ({ data }) =>
  <InvoicesContainer>
    <TitleSection title="Invoices"/>
    <div className="invoices">
      {data.map(item => <Invoice key={item.action} {...item} />)}
    </div>
  </InvoicesContainer>;

const InvoicesContainer = styled.div`
  margin-bottom: 20px;
  .invoices {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

Invoices.propTypes = {
  data: PropTypes.array
};

Invoices.defaultProps = {
  data: [
    {
      total: '50k',
      action: 'sent',
      actionQuantity: 455
    },
    {
      total: '30k',
      action: 'paid',
      actionQuantity: 212
    },
    {
      total: '20k',
      action: 'unpaid',
      actionQuantity: 189
    }
  ]
};

export default memo(Invoices);
