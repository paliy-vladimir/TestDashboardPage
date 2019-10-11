import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';
import Header from "./Header";
import Content from "./Content";
import SendModal from "./SendModal";

const reactModalStyles = {
  overlay: {
    backgroundColor: 'rgb(0,0,0,0.2)'
  },
  content: {
    color: 'lightsteelblue',
    width: '500px',
    height: '50%',
    margin: '20% auto',
    padding: '0',
    display: 'flex',
    flexDirection: 'column'
  }
};

const Modal = ({ children, showModal, handleCloseModal }) => (
  <ReactModal
    isOpen={showModal}
    onRequestClose={handleCloseModal}
    ariaHideApp={false}
    style={reactModalStyles}
  >
    <Header handleCloseModal={handleCloseModal} />
    <Content> {children} </Content>
  </ReactModal>
);
Modal.propTypes = {
  showModal: PropTypes.bool,
  handleCloseModal: PropTypes.func
};

Modal.defaultProps = {
  handleCloseModal: () => null,
  showModal: false
};

export default memo(Modal);
