import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

//componente que se encarga de mantener privadas las ruta del dashboard si el usuario esta logueado
export const PrivateRoute = ({ children }) => {
  //desestructuramos...
  const { user } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  //si el usuario esta logueado redirigimos a la ultima pagina visitada
  localStorage.setItem("lastPath", pathname + search);

  return user.logged ? children : <Navigate to='/login' />;
}
