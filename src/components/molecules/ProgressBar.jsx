import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';

import { Label } from './Label';

import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({value, text, colorText, colorSuccess, colorNeed }) =>
  <StyledContainer>
    <CircularProgressbar
      value={value}
      text={`${value}%`}
      strokeWidth={2}
      styles={{
        path: {
          // Path color
          stroke: colorSuccess,
        },
        trail: {
          stroke: colorNeed,
        },
        // Customize the text
        text: {
          fill: colorText,
          fontSize: '16px',
        },
        // Customize background - only used when the `background` prop is true
        background: {
          fill: '#3e98c7',
        },
      }}
    />
    <Label>{text}</Label>
  </StyledContainer>;

const StyledContainer = styled.div`
  width:100px
`

ProgressBar.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string,
  colorNeed: PropTypes.string,
  colorSuccess: PropTypes.string,
  colorText: PropTypes.string,
}

ProgressBar.defaultProps = {
  value: 40,
  text: 'PAID LATE',
  colorNeed: '#f9f9f9',
  colorSuccess: 'rgb(76, 175, 80)',
  colorText: 'rgb(76, 175, 80)'
}

export default memo(ProgressBar);
