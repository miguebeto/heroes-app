import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

//componente que se encarga de mantener privadas las ruta del dashboard si el usuario esta logueado
export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  // console.log(user)

  return user.logged ? children : <Navigate to='/login' />;
}
