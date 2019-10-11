import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import coin from '../../../resourses/img/create-invoice-coin@27.77777862548828x.png'

const Header = ({ main, desc, img, className }) =>
  <StyledHeader className={className}>
    <img src={img}/>
    <div>
      <p className="text">
        {main}
      </p>
      <p className="text">{desc}</p>
    </div>
  </StyledHeader>
;

const StyledHeader = styled.div`
  background: linear-gradient(180deg, #563d5d, #2b1c30);
  display: flex;
  align-items: center;
  padding:  0 17px;  
  margin-bottom: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  
  img {
    height: 18px;
    width: 18px;
    margin-right: 5px;
    margin-top: -24px;
  }
  .text {
    margin: 0;
    font-family: "Quicksand", Helvetica, Arial, serif;
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    color: rgba(255, 255, 255, 1.0);
    text-align: left;
    line-height: 23px;
  }
`

Header.propTypes = {
  main: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
};

Header.defaultProps = {
  main: 'Billing',
  desc: 'Dashboard',
  img: coin,
};

export default memo(Header);
