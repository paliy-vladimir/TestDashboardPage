import React, {memo} from 'react';
import styled from "styled-components";

const Content = ({children}) =>
      <StyledContent>
        {children}
      </StyledContent>
;

const StyledContent = styled.div`
  height: 100%;
`;

export default memo(Content);
