import React, {useState} from 'react';
import {Button, Form, Nav, Navbar, NavItem} from 'react-bootstrap';
import LogoWhite from '../assets/LogoWhite';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';

const DateScreen = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focused, setFocused] = useState(true);

  const color = '#6F0C0C';

  return (
    <div>
      <Navbar id='red-nav' className='p-4 mb-0'>
        <Nav className='me-auto' />

        <span id='nav-title'>YOUR DATA</span>

        <Nav className='me-auto' />

        <Navbar.Brand href='/'>
          <LogoWhite />
        </Navbar.Brand>
      </Navbar>

      <div className='w-100 h-100 d-flex justify-content-evenly align-items-center  flex-row mt-5'>
        <Form className={'w-50'}>
          <Form.Group className='mb-3 lg' controlId='formName'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Surname</Form.Label>
            <Form.Control type='text' placeholder='' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Drivers license number</Form.Label>
            <Form.Control type='text' placeholder='' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Phone number</Form.Label>
            <Form.Control type='text' placeholder='' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='' />
          </Form.Group>

          <Button href={'/done'} style={{backgroundColor: color, borderWidth: 0}} className='ps-4 pe-4 pt-2 pb-2'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default DateScreen;
