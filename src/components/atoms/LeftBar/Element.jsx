import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Element = ({ text, img, isSelected, onChange, id }) => {
  const changeCurrentElement = () => onChange(id);
  return <StyledElement isSelected={isSelected} onClick={changeCurrentElement}>
    <div>
      <img src={img} alt='icon' className="shape"/>
    </div>
    <div className="text">
      {text}
    </div>
  </StyledElement>;
};

const StyledElement = styled.div`
  display: flex;
  padding: 0 17px;
  cursor: pointer;
  background-color: ${props => props.isSelected ? 'rgba(238, 238, 238, 1.0)' : 'unset'};
  .text {
    font-family: "Quicksand", Helvetica, Arial, serif;
    font-weight: ${props => props.isSelected ? 700 : 400};
    font-style: normal;
    font-size: 14px;
    color: ${props => props.isSelected ? 'rgba(83, 58, 89, 1.0)' : 'rgba(48, 48, 48, 1.0)'};
    text-align: left;
    line-height: 18px;
    margin-bottom: 10px;
  }
  
  .shape {
    height: 13px;
    width: 13px;
    margin-right: 13px;
  }
`;

Element.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.number,
};

Element.defaultProps = {
  text: '',
  img: '',
  isSelected: false,
  onChange: () => null,
  id: 0,
};

export default memo(Element);
