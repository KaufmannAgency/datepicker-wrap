import React from 'react';
import styled from 'styled-components';

import DayPicker from './DayPicker';

const TimePicker = (props) => (
  <StyledDayPicker showTimeSelect dateFormat="dd.MM.yyyy HH.mm" {...props} />
);

const StyledDayPicker = styled(DayPicker)`
  .react-datepicker-popper {
    min-width: 350px;
  }

  input {
    & {
      width: 210px;
      text-align: center;
    }
  }
`;

export default TimePicker;
