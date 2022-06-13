import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import LogoWhite from '../assets/LogoWhite';
import CarCard from '../components/CarCard';

const data = [
  {
    name: 'Audi A3 SB 1.6 TDI S-Tronic Sportpaket',
    year: 2016,
    engine: 'Diesel',
    transmission: 'Automatic',
    color: 'Red metallic',
    power: '81 kW (110 ph)',
    price: '$80',
    image: 'audi1',
  },
  {
    name: 'Audi A6 45 TDI Quattro Tiptronic Sport',
    year: 2019,
    engine: 'Diesel',
    transmission: 'Automatic',
    color: 'Gray metallic',
    power: '170 kW (231 ph)',
    price: '$120',
    image: 'audi2',
  },
];

const AudiScreen = () => {
  const color = '#6F0C0C';

  return (
    <div>
      <Navbar id='red-nav' className='p-4 mb-0'>
        <Navbar.Brand>
          <img src={require('../assets/images/Audi.png')} alt='' />
        </Navbar.Brand>
        <Nav className='me-auto' />

        <span id='nav-title'>AUDI</span>

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
          <CarCard car={it} color={color} />
        ))}
      </div>
    </div>
  );
};

export default AudiScreen;
