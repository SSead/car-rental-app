import React from 'react';
import {Navbar, Container, Nav, NavDropdown, NavItem} from 'react-bootstrap';
import Logo from '../assets/Logo';
import PhoneIcon from '../assets/iocns/PhoneIcon';
import MapIcon from '../assets/iocns/MapIcon';
import MailIcon from '../assets/iocns/MailIcon';
import ClockIcon from '../assets/iocns/ClockIcon';

const NavBar = () => {
  return (
    <>
      <Navbar id='landing-nav' className='p-4 mb-0'>
        <Navbar.Brand href='#home'>
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
    </>
  );
};

export default NavBar;
