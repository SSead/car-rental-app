import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import LogoWhite from '../assets/LogoWhite';
import CarCard from '../components/CarCard';

const data = [
  {
    name: 'Renault Captur 1.5 DCI',
    year: 2018,
    engine: 'Diesel',
    transmission: 'Automatic',
    color: 'Gray metallic',
    power: '66 kW (90 ph)',
    price: '$65',
    image: 'reno1',
  },
  {
    name: 'Renault Megane 1.5 DCI',
    year: 2017,
    engine: 'Diesel',
    transmission: 'Automatic',
    color: 'Blue metallic',
    power: '81 kW (110ph)',
    price: '$70',
    image: 'reno2',
  },
];

const RenoScreen = () => {
  const color = '#EDE40D';

  return (
    <div>
      <Navbar id='yellow-nav' className='p-4 mb-0'>
        <Navbar.Brand>
          <img src={require('../assets/images/Reno.png')} alt='' />
        </Navbar.Brand>
        <Nav className='me-auto' />

        <span id='nav-title'>RENAULT</span>

        <Nav className='me-auto' />

        <Navbar.Brand href='/'>
          <LogoWhite />
        </Navbar.Brand>
      </Navbar>

      <div className='flex-row d-flex mt-5 justify-content-evenly'>
        <div id='select-car' className='m-5' style={{color: color}}>
          SELECT A CAR
        </div>
        {data.map(it => (
          <CarCard car={it} color={color} textColor='#000000' />
        ))}
      </div>
    </div>
  );
};

export default RenoScreen;
