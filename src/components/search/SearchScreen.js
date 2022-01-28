import React from "react";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByNames";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  //usamos el custom hook para obtener el estado y el manejador de eventos
  const [values, handleInputChange, reset] = useForm({
    searchText: "",
  });

  //destructuramos el estado
  const { searchText } = values;

  const heroesFiltered = getHeroByName('Algo por aqui');

  //funcion que se ejecuta al presionar el boton de busqueda o enter
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    reset();
  };

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button className="btn btn-outline-primary mt-1" type="submit">
              Buscar...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {
            heroesFiltered.map((hero) => (
              <HeroCard 
                key={hero.id}
                { ...hero }
              />
            ))
          }
        </div>
      </div>
    </>
  );
};
