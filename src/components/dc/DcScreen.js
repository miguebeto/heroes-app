import React from 'react';
import { HeroList } from '../hero/HeroList';

//muestra el listado de los heroes segun el publisher (Dc o Marvel)
export const DcScreen = () => {

  return (
    <div> 
        <h1>DcScreen</h1> 
        <hr />
        
        <HeroList publisher="DC Comics" />
    </div>
  )
};
