import React from 'react';
import '../SignUp/Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Weclome back!</h1>
      <img className='form-img-2'  src={require('../Media/undraw_order_confirmed_aaw7.svg')} />
    </div>
  );
};

export default FormSuccess;
