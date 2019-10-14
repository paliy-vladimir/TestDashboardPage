import React, { memo } from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = ({placeholder}) => <StyledInput type="text" placeholder={placeholder} />;

const StyledInput = styled.input`
    height: 30px;
    width: 98%;
    border: none;
    border-top: 1px solid rgb(229,229,229);
    padding-left: 10px;
`;

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Title...',
};

export default memo(Input);
