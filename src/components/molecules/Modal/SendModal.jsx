import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../../molecules/Button';

const SendButton = ({ onClick, text }) =>
  <StyledContainer>
    <StyledButton
      onClick={onClick}
      width="90px"
      height="30px"
    >
      <p> {text} </p>
      <div className="arrow" />
    </StyledButton>
  </StyledContainer>;

const StyledContainer = styled.div`
  padding: 0 17px;
  margin: 18px 0;
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: rgba(1, 121, 254, 1.0);

  p {
    font-family: "Quicksand", Helvetica, Arial, serif;
    font-weight: 900;
    font-style: normal;
    font-size: 14px;
    color: rgba(254, 254, 254, 1.0);
    text-align: left;
    line-height: 18px;
  }
  
  .action {
    margin-left: 8px;
    margin-right: 8px;
  }
  
  .arrow::before {
    border-style: solid;
    border-width: 0.15em 0.15em 0 0;
    content: '';
    display: inline-block;
    height: 0.25em;
    left: 0.35em;
    position: relative;
    top: 0.25em;
    vertical-align: top;
    width: 0.25em;
    border-color: white;
    transform: rotate(135deg);
  }
`;

SendButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

SendButton.defaultProps = {
  onClick: () => null,
  text: 'SEND |  ',
};

export default memo(SendButton);
