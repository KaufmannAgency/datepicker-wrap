import React from 'react';
import styled from 'styled-components';

import DayPicker from './DayPicker';

import clock from './assets/clock.svg';

const TimePicker = (props) => (
  <StyledDayPicker
    dateFormat="dd.MM.yyyy 'klo' H.mm"
    timeCaption="Aika"
    {...props}
    showTimeSelect
  />
);

const StyledDayPicker = styled(DayPicker)`
  .react-datepicker-popper {
    min-width: 350px;
  }

  input {
    & {
      width: ${(props) => props.width || '210px'};
      padding-left: 15px;

      // text-align: center;
      // We need the " instead of ' so disable prettier for this
      // prettier-ignore
      background: white url("${clock}");
      background-size: 24px 24px;
      background-repeat: no-repeat;
      background-position: right 7px center;
    }
  }
`;

export default TimePicker;
