import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import LogoWhite from '../assets/LogoWhite';
import CarCard from '../components/CarCard';

const data = [
  {
    name: 'Volkswagen Passat 1.6 CR TDI Comfortline',
    year: 2017,
    engine: 'Diesel',
    transmission: 'Manuel - 6',
    color: 'White metallic',
    power: '88 kW (120 ph)',
    price: '$90',
    image: 'vw1',
  },
  {
    name: 'Volkswagen Golf VII 2.0 CR TDI',
    year: 2016,
    engine: 'Diesel',
    transmission: 'Automatic',
    color: 'Black metallic',
    power: '110 kW (150 ph)',
    price: '$80',
    image: 'vw2',
  },
];

const VWScreen = () => {
  const color = '#001E50';

  return (
    <div>
      <Navbar id='blue-nav' className='p-4 mb-0'>
        <Navbar.Brand>
          <img src={require('../assets/images/VW.png')} alt='' />
        </Navbar.Brand>
        <Nav className='me-auto' />

        <span id='nav-title'>VOLKSWAGEN</span>

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

export default VWScreen;
