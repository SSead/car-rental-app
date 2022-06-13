import React from 'react';

const CarCard = ({car, color, textColor = '#ffffff'}) => {
  const dataRow = (field, data) => (
    <div className='d-flex flex-row justify-content-between ps-4 pe-4 pt-2 pb-2'>
      <div>{field}</div>
      <div>{data}</div>
    </div>
  );

  return (
    <a href={'/date'} className={'m-5'}>
      <div id='car-container' style={{backgroundColor: color, color: textColor}}>
        <img src={require(`../assets/images/${car.image}.png`)} alt='' height={300} className='w-100 p-4' />
        <div className='text-center m-3'>{car.name}</div>

        {dataRow('Year', car.year)}
        {dataRow('Engine', car.engine)}
        {dataRow('Transmission', car.transmission)}
        {dataRow('Color', car.color)}
        {dataRow('Power', car.power)}

        <div className='text-center m-3'>Price {car.price} per day</div>
      </div>
    </a>
  );
};

export default CarCard;
