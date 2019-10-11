import React, { memo } from 'react';
import PropTypes from "prop-types";
import chroma from 'chroma-js';
import styled from 'styled-components';

import Select, { components } from 'react-select';

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

const colourOptions = [
  { value: 'Evgeny', label: 'Evgeny', color: '#00B8D9', isFixed: true },
  { value: 'Big Boss', label: 'Big Boss', color: '#0052CC', isDisabled: true },
  { value: 'Master', label: 'Master', color: '#5243AA' },
  { value: 'Esa', label: 'Esa', color: '#FF5630' },
  { value: 'Mikka', label: 'Mikka', color: '#FF8B00' },
];

const DropdownIndicator = (props) => <components.DropdownIndicator {...props}> + </components.DropdownIndicator>;

const MultiSelect = (props) => {
  const paddingLeft =  props.withPadding ? 20 : 0;
  colourStyles.control = styles => ({ ...styles, backgroundColor: 'white', paddingLeft });
  return <StyledSelect
    isMulti
    {...props}
    components={{ DropdownIndicator }}
  />;
}

const StyledSelect = styled(Select)`
  margin: 5px 0; 
`

MultiSelect.propTypes = {
  closeMenuOnSelect: PropTypes.bool,
  defaultValue: PropTypes.array,
  options: PropTypes.array,
  styles: PropTypes.object,
  withPadding: PropTypes.bool,
};

MultiSelect.defaultProps = {
  closeMenuOnSelect: false,
  defaultValue: [colourOptions[0]],
  options: colourOptions,
  styles: colourStyles,
  withPadding: false,
}

export default memo(MultiSelect)
