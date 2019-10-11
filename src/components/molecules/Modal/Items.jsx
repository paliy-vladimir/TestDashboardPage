import React from 'react';
import styled from 'styled-components';
import Select from '../Select';

const Items = ({}) => (
  <StyledItems>
    <p>Items</p>
    <Select />
  </StyledItems>
);
const StyledItems = styled.div`
  height: 250px;
  padding: 10px;
  p {
    font-family: 'Quicksand', Helvetica, Arial, serif;
    font-weight: 700;
    font-style: normal;
    font-size: 8px;
    color: rgba(143, 143, 143, 1);
    text-align: left;
    line-height: 10px;
    margin: 0;
  }
`;

export default Items;
