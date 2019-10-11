import React, { memo } from 'react';
import styled from 'styled-components';

import CategoryLink from './CategoryLink';

import logo from '../../../resourses/img/create-invoice-sync@2x.png';
import sisImg from '../../../resourses/img/create-invoice-oval@17.85714340209961x.png';
import homeImg from '../../../resourses/img/create-invoice-icon--home-ol@20.83333396911621x.png';
import calendarImg from '../../../resourses/img/create-invoice-shape-2@2x.png';
import bookImg from '../../../resourses/img/create-invoice-icon--academic-o@23.809524536132812x.png';
import coinImg from '../../../resourses/img/create-invoice-icon--bill-o@23.809524536132812x.png';
import optionsImg from '../../../resourses/img/create-invoice-morevert---material@125x.png';
import notificationImg from '../../../resourses/img/create-invoice-uea3c@31.25x.png';

const TopBar = () => (
  <StyledContainer className="toolbar">
    <div className="logo">
      <img src={logo} className="shape" alt="logo" />
    </div>
    <div className="toolbar-sections">
      <div className="toolbar-categories">
        <CategoryLink imgSrc={sisImg} text="SIS" to="/sis" />
        <CategoryLink text="Members" to="/members" />
        <CategoryLink text="Groups" to="groups" />
      </div>
      <div className="toolbar-actions">
        <CategoryLink imgSrc={homeImg} to="/home" />
        <CategoryLink imgSrc={calendarImg} to="/calendar" />
        <CategoryLink imgSrc={bookImg} to="/book" />
        <CategoryLink imgSrc={coinImg} to="/coins" />
      </div>
    </div>
    <div className="options">
      <CategoryLink imgSrc={notificationImg} to="/notifications" />
      <img src={optionsImg} alt="" className="options-image" />
    </div>
  </StyledContainer>
);

const StyledContainer = styled.div`
  background-color: rgba(254, 254, 254, 1);
  height: 54px;
  box-sizing: border-box;
  padding: 0 25px;
  display: flex;
  border-bottom: 2px solid rgba(243, 243, 243, 1);
  .logo {
    display: flex;
    align-items: center;
    margin-right: 100px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .toolbar-sections {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    .toolbar-categories {
      display: flex;
      flex-direction: row;
      > * {
        margin: 0 25px;
      }
    }
    .toolbar-actions {
      display: flex;
      flex-direction: row;
      > * {
        margin: 0 12px;
      }
      a img {
        width: auto;
        height: 19px;
      }
    }
  }
  .options {
    width: 30px;
    margin-left: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    img {
      height: 20px;
      width: 20px;
    }
    .options-image {
      width: auto;
      height: 20px;
    }
  }
`;

export default memo(TopBar);
