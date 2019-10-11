import React from 'react';
import styled from 'styled-components';
import Checkbox from '../../molecules/Checkbox';

const CheckboxBar = () => <StyledCheckboxBar>
  <p>Send via</p>
  <Checkbox label={'Sync'} className='checkbox'/>
  <Checkbox label={'Email'} className='checkbox'/>
</StyledCheckboxBar>;

const StyledCheckboxBar = styled.div`
  display: flex;
  margin-left: 40px;
  p {
    margin-right: 20px;
    font-family: "Quicksand", Helvetica, Arial, serif;
    font-weight: 500;
    font-style: normal;
    font-size: 12px;
    color: rgba(111, 111, 111, 1.0);
    text-align: left;
    line-height: 15px;
    align-self: center;
  }
  .checkbox {
    margin-right: 10px;
    align-self: center;
    font-family: "Quicksand", Helvetica, Arial, serif;
    font-weight: 500;
    font-style: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1.0);
    line-height: 15px;
  }
`

export default CheckboxBar;
