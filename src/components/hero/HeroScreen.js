import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

//usamos el useParam ys mostrar solamente el compnenete que concida con el id que se le pasa por parametro, en caso de no coincidir con ninguno, mostrara el componente MarvelScreen
export const HeroScreen = () => {
  const navigate = useNavigate();
  const {heroId} = useParams();
  const hero = getHeroById(heroId);

  const imagePath = `/assets/${hero.id}.jpg`;

  const handleReturn = () => { 
    navigate( -1 );
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  return (
      <div className='row mt-5'>
          <div className='col-4'>
            <img 
              src={ imagePath } 
              alt={ superhero } 
              className='img-thumbnail'
            />
          </div>
          <div className='col-8'>
            <h3>{ superhero }</h3>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'> <b>Alter ego: </b>{ alter_ego }</li>
              <li className='list-group-item'> <b>Publisher: </b>{ publisher }</li>
              <li className='list-group-item'> <b>First Appearance: </b>{ first_appearance }</li>  
            </ul>
            <h5 className='mt-3'>characters</h5>
            <p>{ characters }</p>
            <button 
              className='btn btn-outline-info'
              onClick={ handleReturn }
            >
              Regresar
            </button>
          </div>
      </div>
  )
};
