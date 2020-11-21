import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from'../Services/DataItems';
import Data from '../Services/Data';

function Services() {
  return (
    <>
     <Data  {...homeObjOne}/>
      <Data  {...homeObjTwo}/>
      <Data  {...homeObjThree}/>
      
    </>
  );
}

export default Services;
