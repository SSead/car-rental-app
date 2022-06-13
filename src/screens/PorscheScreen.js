import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import LogoWhite from '../assets/LogoWhite';
import CarCard from '../components/CarCard';

const data = [
  {
    name: 'Porsche Cayenne Coupe 3.0 Tiptronik 4x4',
    year: 2019,
    engine: 'Petrol',
    transmission: 'Automatic',
    color: 'Black metallic',
    power: '250 kW (340 ph)',
    price: '$500',
    image: 'porsche1',
  },
  {
    name: 'Harley-Davidson - Special Porsche Design ',
    year: 2014,
    engine: 'Petrol',
    transmission: 'Manual',
    color: 'Black',
    power: '250 ph',
    price: '$50',
    image: 'porsche2',
  },
];

const PorscheScreen = () => {
  const color = '#000000';

  return (
    <div>
      <Navbar id='black-nav' className='p-4 mb-0'>
        <Navbar.Brand>
          <img src={require('../assets/images/Porsche.png')} alt='' />
        </Navbar.Brand>
        <Nav className='me-auto' />

        <span id='nav-title'>PORSCHE</span>

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

export default PorscheScreen;
