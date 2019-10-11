import React, { memo } from 'react';
import styled from 'styled-components';

const TitleSection = ({ title }) => (
  <StyledContainer className="title-section">
    <span>{title}</span>
  </StyledContainer>
);

const StyledContainer = styled.div`
  margin-top: 15px;
  font-family: 'Quicksand', Helvetica, Arial, serif;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  color: rgba(48, 48, 48, 1);
  text-align: center;
  line-height: 18px;
  text-transform: uppercase;
`;

export default memo(TitleSection);
