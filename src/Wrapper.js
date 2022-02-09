import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import fi from 'date-fns/locale/fi';
import 'react-datepicker/dist/react-datepicker.css';

import arrowRight from './assets/arrow_right.svg';
import calendar from './assets/calendar.svg';

registerLocale('fi', fi);
setDefaultLocale('fi');

const Wrapper = (props) => {
  // Change Moment props to vanilla since that's what DatePicker uses
  const {
    selected,
    onChange,
    controls,
    onPrevious,
    onNext,
    minTime,
    maxTime,
    width,
    invalid,
    ...inheritedProps
  } = props;

  return (
    <Container width={width} controls={controls} invalid={invalid}>
      <DatePicker
        selected={selected && selected.isValid() && selected.toDate()}
        onChange={(date) => {
          const mDate = moment(date);
          if (mDate.isValid()) {
            onChange(moment(date));
          } else {
            console.debug(`Entered date '${date}' is invalid`);
          }
        }}
        minTime={minTime ? minTime.toDate() : null}
        maxTime={maxTime ? maxTime.toDate() : null}
        {...inheritedProps}
      />
      {controls && (
        <>
          <ArrowContainerLeft onClick={onPrevious}>
            <ArrowLeft src={arrowRight} />
          </ArrowContainerLeft>

          <ArrowContainerRight onClick={onNext}>
            <ArrowRight src={arrowRight} />
          </ArrowContainerRight>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  input {
    width: ${(props) => props.width || '110px'};
    color: #313131;
    padding: 8px;
    padding-left: 15px;

    font-size: 16px;
    border-radius: 4px;
    border: 1px solid ${(props) => (props.invalid ? 'red' : '#aeaeae')};
    line-height: 16px;
    // prettier-ignore
    background: white url("${calendar}");
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: right ${(props) => (props.controls ? '30px' : '7px')}
      center;
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 0;
  height: 34px;
  width: 30px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowContainerRight = styled(ArrowContainer)`
  right: 0;
`;

const ArrowContainerLeft = styled(ArrowContainer)`
  left: 0;
`;

const Arrow = styled.img`
  height: 16px;
`;

const ArrowLeft = styled(Arrow)`
  transform: rotate(180deg);
`;

const ArrowRight = styled(Arrow)``;

export default Wrapper;
