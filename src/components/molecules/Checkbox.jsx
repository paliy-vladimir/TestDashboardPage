import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CheckboxMaterial from "labeled-checkbox-material-ui";

const Checkbox = ({ label, onChange, className }) => <StyledContent className={className}>
  <CheckboxMaterial
    label={label}
    onChange={onChange}
  />
</StyledContent>;

const StyledContent = styled.div`
  .MuiTypography-body1 {
    font-family: "Quicksand", Helvetica, Arial, serif;
    font-weight: 500;
    font-style: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1.0);
    line-height: 15px;
  }
`;

Checkbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  label: '',
  onChange: () => null,
};

export default memo(Checkbox);
