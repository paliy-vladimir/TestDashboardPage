import React, {memo} from 'react';
import styled from "styled-components";

const Content = ({children}) => <StyledContent> {children} </StyledContent>;

const StyledContent = styled.div``;

export default memo(Content);
