import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

// Check MonthPicker for comments
const DayPicker = (props) => {
  const { className, ...inheritedProps } = props;

  const onPrevious = () =>
    props.onChange(props.selected.subtract(1, 'day').clone());
  const onNext = () => props.onChange(props.selected.add(1, 'day').clone());

  return (
    <Container className={className} controls={props.controls}>
      <Wrapper
        dateFormat="dd.MM.yyyy"
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
      width: ${(p) => (p.controls ? '180px' : '145px')};
      padding-left: ${(p) => (p.controls ? '30px' : '15px')};
      padding-right: 30px;
      // text-align: center;
    }
  }
`;

export default DayPicker;
