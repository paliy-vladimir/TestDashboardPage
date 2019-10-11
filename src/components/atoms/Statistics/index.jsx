import React, { memo } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Invoices from './Invoices';
import Conversion from './Conversion';

const Statistics = () =>
  <StyledContainer>
    <Header />
    <Invoices />
    <Conversion />
  </StyledContainer>;

const StyledContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-right: 49px;
  margin-left: 49px;
  margin-top: 17px;
`;


export default memo(Statistics);
