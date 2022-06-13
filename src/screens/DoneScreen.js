import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import LogoWhite from '../assets/LogoWhite';
import 'react-dates/initialize';

const DateScreen = () => {
  return (
    <div>
      <Navbar id='green-nav' className='p-4 mb-0'>
        <Nav className='me-auto' />

        <span id='nav-title'>CONGRATULATIONS</span>

        <Nav className='me-auto' />

        <Navbar.Brand href='/'>
          <LogoWhite />
        </Navbar.Brand>
      </Navbar>

      <div className='w-100 h-100 d-flex justify-content-evenly align-items-center  flex-row mt-5'>
        <img src={require('../assets/images/thanks.png')} alt={''} />
      </div>
    </div>
  );
};


export default DateScreen;
