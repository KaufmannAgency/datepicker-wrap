import React from "react";
import styled from "styled-components";

import Wrapper from "./Wrapper";

// Check MonthPicker for comments
const DayPicker = (props) => {
  const { ...inheritedProps } = props;

  const onPrevious = () =>
    props.onChange(props.selected.subtract(1, "day").clone());
  const onNext = () => props.onChange(props.selected.add(1, "day").clone());

  return (
    <Container controls={props.controls}>
      <Wrapper onPrevious={onPrevious} onNext={onNext} {...inheritedProps} />
    </Container>
  );
};

const Container = styled.div`
  .react-datepicker-popper {
    min-width: 250px;
  }

  input {
    & {
      max-width: 180px;
      padding-right: 35px;
      text-align: center;
    }
  }
`;

export default DayPicker;
