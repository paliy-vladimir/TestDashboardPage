import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryLink = ({ imgSrc, text, to }) => (
  <StyledContainer>
    <Link to={to}>
      {imgSrc && <img src={imgSrc} alt={text} />}
      <span> {text} </span>
    </Link>
  </StyledContainer>
);

const StyledContainer = styled.div`
  background-color: rgba(255, 255, 255, 0);
  font-family: 'Quicksand', Helvetica, Arial, serif;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  color: rgba(143, 143, 143, 1);
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: rgba(143, 143, 143, 1);
    display: flex;
    align-items: center;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
`;

CategoryLink.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  isSelected: PropTypes.number
};

CategoryLink.defaultProps = {
  imgSrc: '',
  text: '',
  isSelected: 0.6
};

export default memo(CategoryLink);
