import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const Row = ({children}) =>
  <StyledRow >
    {children}

  </StyledRow>
;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

Row.propTypes = {
};

Row.defaultProps = {
};

export default Row;