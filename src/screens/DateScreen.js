import React, {useState} from 'react';
import {Button, Nav, Navbar, NavItem} from 'react-bootstrap';
import LogoWhite from '../assets/LogoWhite';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';

const DateScreen = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focused, setFocused] = useState(true);

  const color = '#F19427';

  return (
    <div>
      <Navbar id='orange-nav' className='p-4 mb-0'>
        <Nav className='me-auto' />

        <span id='nav-title'>SELECT DATE</span>

        <Nav className='me-auto' />

        <Navbar.Brand href='/'>
          <LogoWhite />
        </Navbar.Brand>
      </Navbar>

      <div className='w-100 h-100 d-flex justify-content-evenly align-items-center  flex-row mt-5'>
        <Button
          href={'javascript:history.back()'}
          style={{backgroundColor: color, borderWidth: 0}}
          className='ps-4 pe-4 pt-2 pb-2'>
          Back
        </Button>

        <DateRangePicker
          startDate={startDate}
          startDateId='your_unique_start_date_id'
          endDate={endDate}
          endDateId='your_unique_end_date_id'
          onDatesChange={({startDate, endDate}) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          focusedInput={focused}
          onFocusChange={focusedInput => setFocused(focusedInput)}
        />

        {startDate && endDate ? (
          <Button href={'/form'} style={{backgroundColor: color, borderWidth: 0}} className='ps-4 pe-4 pt-2 pb-2'>
            Next
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default DateScreen;
