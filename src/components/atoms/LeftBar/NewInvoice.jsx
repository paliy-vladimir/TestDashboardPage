import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../../molecules/Button';

const NewInvoice = ({ onClick, text, actionText }) =>
  <StyledContainer>
  <StyledButton onClick={onClick}>
    <p className='action'> {actionText} </p>
    <p> {text} </p>
  </StyledButton>
  </StyledContainer>;

const StyledContainer = styled.div`
  padding: 0 17px;
  margin: 18px 0;
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    font-family: "Quicksand", Helvetica, Arial, serif;
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    color: rgba(254, 254, 254, 1.0);
    text-align: left;
    line-height: 18px;
  }
  
  .action {
    margin-left: 15px;
    margin-right: 8px;
  }
`;

NewInvoice.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  actionText: PropTypes.string,
};

NewInvoice.defaultProps = {
  onClick: () => null,
  text: 'New invoice',
  actionText: '+'
};

export default memo(NewInvoice);
