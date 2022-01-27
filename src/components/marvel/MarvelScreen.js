import React from 'react';
import { HeroList } from '../hero/HeroList';

//muestra el listado de los heroes segun el publisher (Dc o Marvel)
export const MarvelScreen = () => {
  return (
    <div>
        <h1>MarvelScreen</h1>
        <hr />
        
        <HeroList publisher="Marvel Comics" />

    </div>
  )
};
