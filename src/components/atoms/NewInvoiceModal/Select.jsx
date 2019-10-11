import React, { memo } from 'react';
import Select from '../../molecules/Select';
import styled from 'styled-components';

import people from '../../../resourses/img/create-invoice-fill-8@2x.png';

const InvoiceSelect = () =>  <StyledGrid>
  <img src={people} />
  <div className='select'>
    <Select withPadding={true} />
  </div>
</StyledGrid>;

const StyledGrid = styled.div`
  align-items: center;
  position:relative;
  
  .select {
    margin: 0 7px;
  }
  
  img {
    height: auto;
    width: 20px;
    position: absolute;
    z-index: 1;
    left: 12px;
    top: 13px;
  }
`



export default memo(InvoiceSelect)
