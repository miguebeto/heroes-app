import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

//usamos el useParam ys mostrar solamente el compnenete que concida con el id que se le pasa por parametro, en caso de no coincidir con ninguno, mostrara el componente MarvelScreen
export const HeroScreen = () => {

  const {heroId} = useParams();
  const hero = getHeroById(heroId);

  if(!hero) {
    return <Navigate to="/" />
  };

  return (
      <div>
            <h1>Hero Screen</h1>
            <p>
              { hero.superhero }
            </p>
      </div>
  )
};
