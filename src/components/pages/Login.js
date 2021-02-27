import React, { useState } from 'react';
import '../SignUp/Form.css';
import FormLogin from '../Login/FormLogin';
import FormSuccess from '../Login/FormSuccess';

  const Login= () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        <div className='form-content-left'>
          <img className='form-img' src={require('../Media/undraw_data_processing_yrrv.svg')}  />
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Login;
