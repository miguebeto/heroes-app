import { heroes } from "../data/heores";

//Constante que se encarga de encontrar el elemento que concida con el id que se le pasa por parametro
export const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
}
