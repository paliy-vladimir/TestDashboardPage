import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';

class CustomDatePicker extends PureComponent {
  state = {
    startDate: new Date()
  };

  handleChange = startDate => this.setState({ startDate });

  render() {
    const { showTitle, label, dateFormat } = this.props;
    const { startDate } = this.state;
    return (
      <StyledContainer>
        {showTitle && <label>{ label }</label>}
        <DatePicker
          selected={startDate}
          onChange={this.handleChange}
          dateFormat={dateFormat}
        />
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-bottom: 1px solid rgba(143, 143, 143);
  padding-left: 10px;
  justify-content: flex-end;
  border-right: 1px solid rgb(229, 229, 229);
  border-top: 1px solid rgb(229, 229, 229);
  border-bottom: 1px solid rgb(229, 229, 229);
  
  label {
    font-family: 'Quicksand', Helvetica, Arial, serif;
    font-weight: 700;
    font-style: normal;
    font-size: 8px;
    color: rgba(143, 143, 143, 1);
    text-align: left;
    line-height: 10px;
    margin: 0;
  }
  
  .react-datepicker-wrapper {
    padding-left: 5px;
    width: 95%;
    .react-datepicker__input-container {
      width: auto;
    }
    input {
      width: 100%;
      /* height: 30px; */
      border: none;
      outline: none;
      font-family: 'Quicksand', Helvetica, Arial, serif;
      font-weight: 500;
      font-style: normal;
      font-size: 14px;
      color: rgba(143, 143, 143, 1);
      text-align: left;
      line-height: 18px;
    }
  }
`;

CustomDatePicker.propTypes = {
  showTitle: PropTypes.bool,
  label: PropTypes.string,
  dateFormat: PropTypes.string,
};

CustomDatePicker.defaultProps = {
  label: 'Invoice date',
  showTitle: false,
  dateFormat: 'dd MMMM yyyy'
};

export default CustomDatePicker;
