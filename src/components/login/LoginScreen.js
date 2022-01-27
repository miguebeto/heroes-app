import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {

  const navigate = useNavigate();

   //redirige a la pagina de marvel cuando se presiona el boton y no permite el regreso a la pagina anterior
  const handleLogin = () => {
    navigate("/marvel", { replace: true });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={ handleLogin }>login</button>
    </div>
  );
};
