import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const YearPicker = (props) => {
  const { ...inheritedProps } = props;

  // Add some handlers. Clone is required because otherwise the same reference
  // is kept
  const onPrevious = () =>
    props.onChange(props.selected.subtract(1, 'year').clone());
  const onNext = () => props.onChange(props.selected.add(1, 'year').clone());

  return (
    <Container controls={props.controls}>
      <Wrapper
        dateFormat="yyyy"
        showYearPicker
        onPrevious={onPrevious}
        onNext={onNext}
        {...inheritedProps}
      />
    </Container>
  );
};

const Container = styled.div`
  .react-datepicker-popper {
    min-width: 250px;
  }

  input {
    & {
      padding-right: 30px;
      width: ${(p) => (p.controls ? '135px' : '85px')};
      padding-left: ${(p) => (p.controls ? '30px' : '10px')};
    }
  }
`;

export default YearPicker;
