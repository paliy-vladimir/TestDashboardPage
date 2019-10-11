import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = ({placeholder}) => <StyledInput type="text" placeholder={placeholder} />;

const StyledInput = styled.input`
    height: 30px;
    border-top: none;
    border-bottom: 1px solid rgba(143, 143, 143);
    border-left: none;
    border-right: none;
    color: rgba(143, 143, 143, 1.0);
    outline: none;
    margin: 5px 10px;
    width: 96%;
`;

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Title...',
};

export default Input;
