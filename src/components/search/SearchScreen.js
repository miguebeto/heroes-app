import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByNames";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {

  //utilizamos los hooks de react-router-dom para obtener la url actual y el query string
  const navigate = useNavigate();
  const location = useLocation();

  //extraemos el query string de la url actual
  const { q = '' } = queryString.parse(location.search);

  //usamos el custom hook para obtener el estado y el manejador de eventos
  const [values, handleInputChange] = useForm({
    searchText: q,
  });

  //destructuramos el estado
  const { searchText } = values;

  //obtenemos el resultado de la busqueda del query string
  const heroesFiltered = useMemo(()=>getHeroByName(q), [q]); 

  //funcion que se ejecuta al presionar el boton de busqueda o enter
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
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
            (q === '') 
              ? <div className="alert alert-info">Buscar un Heroe</div>
              : (heroesFiltered.length === 0) &&  <div className="alert alert-danger">No hay resultados: {q}</div>
          }

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
