import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Invoice = ({ data }) => (
  <InvoiceContainer className="invoice" action={data.action}>
    <div className="invoice-head">
      <div className="type">RM</div>
      <div className="total">{data.total}</div>
    </div>
    <div className="invoice-body">
      <div className="actionQuantity">{data.actionQuantity}</div>
      <div className="action">{data.action}</div>
    </div>
  </InvoiceContainer>
);

const colors = {
  paid: 'rgba(76, 175, 80, 1.0)',
  sent: 'rgba(143, 143, 143, 1)',
  unpaid: 'rgba(244, 66, 51, 1)'
};

const InvoiceContainer = styled.div`
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
    font-family: 'Quicksand', Helvetica, Arial, serif;
    font-weight: 700;
    font-style: normal;
    font-size: 12px;
    color: rgba(143, 143, 143, 1);
    text-align: left;
    line-height: 20px;
  }
  .total {
    font-family: 'Quicksand', Helvetica, Arial, serif;
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
    font-family: 'Quicksand', Helvetica, Arial, serif;
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
    font-family: 'Quicksand', Helvetica, Arial, serif;
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

export default memo(Invoice);
