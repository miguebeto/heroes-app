import { heroes } from "../data/heores"

//Constante que se encarga de filtrar un array de heroes segun el publisher (Dc o Marvel) y devuelve el error en casi de que no exista
export const getHeroByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if( !validPublishers.includes(publisher) ) {
        throw new Error(`${publisher} is not a valid publisher`);
    }
    return heroes.filter( (hero)=> hero.publisher === publisher);

};