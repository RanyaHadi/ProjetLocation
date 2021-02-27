import React from 'react';
import { Button } from '../button/button';

import '../Choices/Choices.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import './Choices.css';
 

function Choices() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className=' Service__section'>
        <div className='Service__wrapper'>
          <h1 className='Service__heading'> Pricing</h1>
          <div className='Service__container'>
            <Link to='/Rating' className='Service__container-card'>
              <div className='Service__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>$0.99</h4>
                <p>per month</p>
                <ul className='Service__container-features'>
                  <li>GPS included </li>
                  <li>top places</li>
                  <li>$10.000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Choose plan
                </Button>
              </div>
            </Link>
            <Link to='/Rating' className='Service__container-card'>
              <div className='Service__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>$1.99</h4>
                <p>per month</p>
                <ul className='Service__container-features'>
                  <li>Resvations</li>
                  <li>Any place you what</li>
                  <li>$100,000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                Choose plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='Service__container-card'>
              <div className='Service__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>$2.99</h4>
                <p>per month</p>
                <ul className='Service__container-features'>
                  <li>Unlimited Searching</li>
                  <li>Global</li>
                  <li>Unlimited Spending</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Choose plan
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
