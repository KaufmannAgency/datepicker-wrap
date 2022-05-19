import React from 'react';
import styled from 'styled-components';

import DayPicker from './DayPicker';

import clock from './assets/clock.svg';

const TimePicker = (props) => (
  <StyledDayPicker showTimeSelect dateFormat="dd.MM.yyyy HH.mm" {...props} />
);

const StyledDayPicker = styled(DayPicker)`
  .react-datepicker-popper {
    min-width: 350px;
  }

  input {
    & {
      width: ${(p) => (p.controls ? '220px' : '180px')};
      padding-left: ${(p) => (p.controls ? '30px' : '10px')};

      // text-align: center;
      // We need the " instead of ' so disable prettier for this
      // prettier-ignore
      background: white url("${clock}");
      background-size: 24px 24px;
      background-repeat: no-repeat;
      background-position: right ${(props) => (props.controls ? '30px' : '7px')}
        center;
    }
  }
`;

export default TimePicker;
