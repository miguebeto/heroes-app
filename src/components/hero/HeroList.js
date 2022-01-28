import React, { useMemo } from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';

//este componente se encarga de listar los heroes segun el publisher (Marvel o DC) y pasando sus propiedades al componente HeroCard
export const HeroList = ({ publisher }) => {
    //usamos el useMemo para que solo se ejecute la funcion cuando cambie el publisher
    const heroes = useMemo(()=> getHeroByPublisher(publisher), [ publisher ]);

  return (
      <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero } 
                    />
                ))
            }
      </div>
  )
};
