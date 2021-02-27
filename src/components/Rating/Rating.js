import React from 'react';
//import { FaStar } from 'react-icons/fa';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import useForm from './UseForm';
import './Rating.css';


fontawesome.library.add(solid, regular)

const Rating = ({ submitForm }) => {
   const { handleChange, handleSubmit, values, errors } = useForm(
     submitForm,
  
   );

 
    return (
      <div className='form-content-right' style={{marginTop :'15%', MozMarginEnd:'20%'}}>
      <form onSubmit={handleSubmit} className='form' noValidate>
      <div className='form-inputs'>
      <p>Tell us what do you think about the place?</p>          
      <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
         
          <input
            className='form-input'
            type='name'
            placeholder='leave a comment'
           
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
        
        </form>
      </div>

    );
   
  };


export default Rating;