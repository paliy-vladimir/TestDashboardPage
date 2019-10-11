import React, { memo } from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

import close from '../../../resourses/img/create-invoice-path-8@2x.png'

const Header = ({ handleCloseModal, header, image }) =>
  <StyledMainTitle>
    <p>{header}</p>
    <img src={image} onClick={handleCloseModal}></img>
  </StyledMainTitle>
;

const StyledMainTitle = styled.div`
  height: 35px;
  background: rgba(72, 51, 78, 1.0);
  display: flex;
  justify-content: space-between;
  align-items: center;
   p {
    font-family: "Quicksand", Helvetica, Arial, serif;
    font-weight: 900;
    font-style: normal;
    font-size: 14px;
    color: rgba(254, 254, 254, 1.0);
    text-align: left; 
    line-height: 18px;
    margin-left: 20px;
  }
  img {
    width: 10px;
    height: 10px;
    border: none;
    margin-right: 10px;
  }
`;

Header.propTypes = {
  handleCloseModal: PropTypes.func,
  header: PropTypes.string,
  image: PropTypes.string,
};

Header.defaultProps = {
  handleCloseModal: () => null,
  header: 'Send nudes',
  image: close,
};

export default Header;
