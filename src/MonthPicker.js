import React from "react";
import styled from "styled-components";

import Wrapper from "./Wrapper";

const MonthPicker = (props) => {
  const { ...inheritedProps } = props;

  // Add some handlers. Clone is required because otherwise the same reference
  // is kept
  const onPrevious = () =>
    props.onChange(props.selected.subtract(1, "month").clone());
  const onNext = () => props.onChange(props.selected.add(1, "month").clone());

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

  // By default MMMM date format is 'tammikuuta', so we use 'tammi'
  // and modify it to 'tammikuu'
  .react-datepicker__month-text {
    // text-transform: capitalize;

    &::after {
      // content: 'kuu';
    }
  }
`;

export default MonthPicker;
