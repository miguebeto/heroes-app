import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

//creamos el init que es el estado inicial de nuestra aplicacion la primera vez que se carga
const init = () => {
  return JSON.parse(localStorage.getItem("user")) || {logged: false};
}

//utilizamos el contexto para proveer el estado y la funcion dispatch a los componentes hijos
export const HeroesApp = () => { 

  //creamos el useReducer para interactuar con el estado de nuestra aplicacion en el reducer
  const [user, dispatch] = useReducer(authReducer, {}, init);

  //agregamos un efecto que verifique si el usuario esta logueado o no y lo guarde en el localStorage
  useEffect(() => {
    if(!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{
      user,
      dispatch,
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
};
