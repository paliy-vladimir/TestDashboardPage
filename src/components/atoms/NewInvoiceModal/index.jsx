import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Items from '../../molecules/Modal/Items';
import Row from '../../molecules/Row';
import DatePicker from '../../molecules/DatePicker';
import Modal from '../../molecules/Modal';
import InvoiceSelect from './Select';
import Input from '../../molecules/Input';
import CheckboxBar from './CheckboxBar';
import SendModal from '../../molecules/Modal/SendModal';
import { Grid } from '../../molecules/Grid';

const NewInvoiceModal = ({ showModal, handleCloseModal }) => (
  <Modal showModal={showModal} handleCloseModal={handleCloseModal}>
    <InvoiceSelect />
    <Input />
    <Row>
      <DatePicker showTitle={true} />
      <DatePicker />
    </Row>
    <Items />
    <StyledGrid>
      <CheckboxBar />
      <SendModal onClick={handleCloseModal}/>
    </StyledGrid>
  </Modal>
);

const StyledGrid = styled(Grid)`
  justify-content: space-between;
`;

NewInvoiceModal.propTypes = {
  showModal: PropTypes.bool,
  handleCloseModal: PropTypes.func
};

NewInvoiceModal.defaultProps = {
  showModal: false,
  handleCloseModal: () => null
};

export default memo(NewInvoiceModal);
