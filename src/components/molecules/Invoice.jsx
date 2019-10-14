import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Invoice = ({ action, total, actionQuantity }) => (
  <InvoiceContainer className="invoice" action={action}>
    <div className="invoice-head">
      <div className="type">RM</div>
      <div className="total">{total}</div>
    </div>
    <div className="invoice-body">
      <div className="actionQuantity">{actionQuantity}</div>
      <div className="action">{action}</div>
    </div>
  </InvoiceContainer>
);

const colors = {
  paid: 'rgba(76, 175, 80, 1.0)',
  sent: 'rgba(143, 143, 143, 1)',
  unpaid: 'rgba(244, 66, 51, 1)'
};

const InvoiceContainer = styled.div`
  font-family: 'Quicksand', Helvetica, Arial, serif;
 
  .invoice-head {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;
    margin-bottom: 20px;
  }
  
  .invoice-body {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-left: 15px;
  }
  
  .type {
    font-weight: 700;
    font-style: normal;
    font-size: 12px;
    color: rgba(143, 143, 143, 1);
    text-align: left;
    line-height: 20px;
  }
  
  .total {
    font-weight: 300;
    font-style: normal;
    font-size: 38px;
    color: ${props =>
      colors[props.action.toLowerCase()] || 'rgba(143, 143, 143, 1)'};
    text-align: left;
    line-height: 38px;
  }
  
  .action {
    text-transform: uppercase;
    font-weight: 700;
    font-style: normal;
    font-size: 10px;
    color: ${props =>
      colors[props.action.toLowerCase()] || 'rgba(143, 143, 143, 1)'};
    text-align: center;
    line-height: 13px;
  }
  
  .actionQuantity {
    transform: rotate(0deg);
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    color: ${props =>
      colors[props.action.toLowerCase()] || 'rgba(143, 143, 143, 1)'};
    text-align: left;
    line-height: 25px;
  }
`;

Invoice.propTypes = {
  total: PropTypes.string,
  action: PropTypes.string,
  actionQuantity: PropTypes.number
};

Invoice.defaultProps = {
  total: '',
  action: '',
  actionQuantity: '',
};

export default memo(Invoice);
