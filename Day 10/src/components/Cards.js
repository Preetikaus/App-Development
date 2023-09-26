import React from 'react';
import '../assets/css/Cards.css'
import CardItem from '../components/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../assets/imgs/img-9.jpg'
              text='The Art of Car Cleaning - We Master It.'
              label='Services'
              path='/services'
            />
            <CardItem
              src="../assets/imgs/interior.jpg"
              text='Elevating Interior Hygiene, One Detail at a Time.'
              label='Services'
              path='/services'
            />
            <CardItem
              src="../assets/imgs/paint.jpg"
              text='Precision Paint Repair, Perfection on Wheels.'
              label='Services'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;