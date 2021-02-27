import React from 'react';
import '../Cards/Cards.css';
import CardItem from '../Cards/CardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            src={require('../Media/pic10.jpg')}
             
              text='Find The Best places to eat'
              label='Restaurants'
              path='/SignUp'
            />
            <CardItem
              src={require('../Media/pic5.jpg')}
              text='Find Any Train Station '
              label='Train Stations'
              path='/SignUp'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
             src={require('../Media/pic8.jpg')}
              text=' Find The Perfect places with The Best Coffee '
              label='Coffee Shops'
             path='/SignUp'
            />
            <CardItem
              src={require('../Media/pic2.jpg')}
              text='Find any place wherever you go'
              label='International Areas'
              path='/SignUp'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src={require('../Media/pic4.jpg')}
              text='Find Hotels in top destinations'
              label='Hotels'
              path='/SignUp'
            />
            <CardItem
              src={require('../Media/pic1.jpg')}
              text='Our servevices are perfect for your travel'
              label='Airports'
              path='/SignUp'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
