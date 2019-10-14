import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Select from '../Select';

const Items = ({header}) => (
  <StyledItems>
    <p>{ header }</p>
    <Select  />
  </StyledItems>
);
const StyledItems = styled.div`
  height: 250px;
  padding: 10px;
  p {
    font-family: 'Quicksand', Helvetica, Arial, serif;
    font-weight: 700;
    font-style: normal;
    font-size: 8px;
    color: rgba(143, 143, 143, 1);
    text-align: left;
    line-height: 10px;
    margin: 0;
  }
`;

Items.propTypes = {
  header: PropTypes.string,
};

Items.defaultProps = {
  header: 'Items'
};

export default memo(Items);
