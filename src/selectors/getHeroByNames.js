import { heroes } from "../data/heores";

export const getHeroByName = (name = "") => {
    //si el nombre esta vacio, retornamos el arreglo vacio
    if (name === "") return [];
    //pasamos el nombre a minusculas
    name = name.toLowerCase();
    //retornamos el arreglo filtrado si el nombre del que se busca esta inlcuido en el nombre del heroe
    return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));

};
