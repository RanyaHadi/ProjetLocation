import React from 'react';
import { Button } from '../button/button';
import '../Choices/Choices.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Choices() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className=' Service__section'>
        <div className='Service__wrapper'>
          <h1 className='Service__heading'> Our Services</h1>
          <div className='Service__container'>
            <Link to='/sign-up' className='Service__container-card'>
              <div className='Service__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Find Your Position</h3>
                <h4>$8.99</h4>
                <p>per month</p>
                <ul className='Service__container-features'>
                  <li>100 Transactions</li>
                  <li>2% Cash Back</li>
                  <li>$10,000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                 Go To Map
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='Service__container-card'>
              <div className='Service__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Find Any Place</h3>
                <h4>$29.99</h4>
                <p>per month</p>
                <ul className='Service__container-features'>
                  <li>1000 Transactions</li>
                  <li>3.5% Cash Back</li>
                  <li>$100,000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                   Go To Map
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='Service__container-card'>
              <div className='Service__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>$99.99</h4>
                <p>per month</p>
                <ul className='Service__container-features'>
                  <li>Unlimited Transactions</li>
                  <li>5% Cash Back</li>
                  <li>Unlimited Spending</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Go To Map
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Choices;
