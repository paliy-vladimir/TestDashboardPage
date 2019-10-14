import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import coin from '../../../resourses/img/create-invoice-coin@27.77777862548828x.png';

const Header = ({ main, desc, className }) => (
  <StyledHeader className={className}>
    <div>
      {main && <p className="text">{main}</p>}
      {desc && <p className="text">{desc}</p>}
    </div>
    <div className="dropdown">
      All Time
      <p className="dropdown-arrow">❯</p>
      <div className="dropdown-list">
        <div className="dropdown-item">item 1</div>
        <div className="dropdown-item">item 2</div>
      </div>
    </div>
  </StyledHeader>
);

const StyledHeader = styled.div`
  background: linear-gradient(180deg, #563d5d, #2b1c30);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Quicksand', Helvetica, Arial, serif;
  padding: 0 17px;
  margin-bottom: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  .dropdown-arrow {
    transform: rotate(90deg);
  }
  .text {
    margin: 0;
    font-family: 'Quicksand', Helvetica, Arial, serif;
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    padding: 10px 0;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    line-height: 23px;
  }
  .dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    cursor: pointer;
    font-size: 14px;
    color: #fff;
    position: relative;
  }
  .dropdown-list {
    width: 100%;
    top: 46px;
    position: absolute;
    display: none;
    background: #fff;
    .dropdown-item {
      background: linear-gradient(180deg, #563d5d, #2b1c30);
      color: #fff;
      padding: 3px 10px;
    }
  }
  .dropdown:hover {
    .dropdown-list {
      display: block;
    }
  }
`;

Header.propTypes = {
  main: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string
};

Header.defaultProps = {
  main: 'Statistics',
  desc: '',
  img: coin
};

export default memo(Header);
