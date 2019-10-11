import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CheckboxMaterial from "labeled-checkbox-material-ui";

const styleCheckboxLabel = {};

const Checkbox = ({ label, onChange, className }) => <StyledContent className={className}>
  <CheckboxMaterial
    label={label}
    onChange={onChange}
    styleLabel={styleCheckboxLabel}
  />
</StyledContent>;

const StyledContent = styled.div``;

Checkbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
}

Checkbox.defaultProps = {
  label: '',
  onChange: () => null,
}

export default Checkbox;
