import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubElement = ({ text, value, isSelected, onChange, id }) => {
  const changeCurrentElement = () => onChange(id);

  return   <StyledElement isSelected={isSelected} onClick={changeCurrentElement}>
    <p className='text'>
      {text}
    </p>
    <p className='text'>
      {value}
    </p>
  </StyledElement>
    ;
}

const StyledElement = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 17px;
  cursor: pointer;
  .text {
    font-family: "Quicksand", Helvetica, Arial, serif;
    font-weight: ${props => props.isSelected ? 700 : 400 };
    font-style: normal;
    font-size: 14px;
    color: ${props => props.isSelected ? 'rgba(83, 58, 89, 1.0)' : 'rgba(48, 48, 48, 1.0)'};
    text-align: left;
    line-height: 18px;
    margin-bottom: 10px;
  } 
`;

SubElement.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.number,
};

SubElement.defaultProps = {
  text: '',
  value: '',
  isSelected: false,
  onChange: () => null,
  id: 0,
};

export default memo(SubElement);
