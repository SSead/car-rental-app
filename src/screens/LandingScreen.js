import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

import Logo from '../assets/Logo';
import PhoneIcon from '../assets/iocns/PhoneIcon';
import MailIcon from '../assets/iocns/MailIcon';
import MapIcon from '../assets/iocns/MapIcon';
import ClockIcon from '../assets/iocns/ClockIcon';

const LandingScreen = () => {
  return (
    <div>
      <Navbar id='landing-nav' className='p-4 mb-0'>
        <Navbar.Brand href='/'>
          <Logo />
        </Navbar.Brand>
        <Nav className='me-auto' />

        <Nav>
          <NavItem className={'nav-item'} eventKey={1} href='#'>
            <PhoneIcon />
            <span className={'p-2'}>033/611-211</span>
          </NavItem>
          <NavItem className={'nav-item'} eventKey={1} href='#'>
            <MailIcon />
            <span className={'p-2'}>rentacarsarajevo@gmail.com</span>
          </NavItem>
          <NavItem className={'nav-item'} eventKey={1} href='#'>
            <MapIcon />
            <span className={'p-2'}>Paromlinska 52</span>
          </NavItem>
          <NavItem className={'nav-item'} eventKey={1} href='#'>
            <ClockIcon />
            <span className={'p-2'}>mon-fri 08:00-20:00 / sat-sun 10:00-18:00</span>
          </NavItem>
        </Nav>
      </Navbar>

      <img src={require('../assets/images/Background.png')} alt='' className='w-100' />
      <div className='d-flex flex-row justify-content-evenly w-100 position-absolute' style={{bottom: '15%'}}>
        <a href={'/vw'}>
          <img src={require('../assets/images/VW.png')} alt='' />
        </a>
        <a href={'/audi'}>
          <img src={require('../assets/images/Audi.png')} alt='' />
        </a>
        <a href={'/porsche'}>
          <img src={require('../assets/images/Porsche.png')} alt='' />
        </a>
        <a href={'/reno'}>
          <img src={require('../assets/images/Reno.png')} alt='' />
        </a>
      </div>
    </div>
  );
};

export default LandingScreen;
