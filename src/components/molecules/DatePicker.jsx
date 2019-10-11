import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CustomDatePicker extends React.PureComponent {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <StyledContainer>
        {this.props.showTitle && <label>Invoice date</label>}
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat="dd MMMM yyyy"
        />
      </StyledContainer>
    );
  }
}

// </StyledInput>
const StyledContainer = styled.div`
  /* height: 30px; */
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-bottom: 1px solid rgba(143, 143, 143);
  padding-left: 10px;
  justify-content: flex-end;
  border-right: 1px solid rgb(229, 229, 229);
  border-top: 1px solid rgb(229, 229, 229);
  border-bottom: 1px solid rgb(229, 229, 229);
  /* color: rgba(143, 143, 143, 1); */
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
    width: 100%;
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

// DatePicker.propTypes = {};

// DatePicker.defaultProps = {};

export default CustomDatePicker;
