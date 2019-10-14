import React, { memo } from 'react';
import styled from "styled-components";

const Row = ({children}) =>
  <StyledRow >
    {children}
  </StyledRow>
;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export default memo(Row);
