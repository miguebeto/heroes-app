import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  //importamos el dispatch del contexto
  const { dispatch } = useContext(AuthContext);
  //importamos el useNavigate para redireccionar a la pagina de inicio
  const navigate = useNavigate();

  //redirige a la pagina de marvel cuando se presiona el boton y no permite el regreso a la pagina anterior
  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: {
        name: "Miguel",
      },
    };
    dispatch(action);

    navigate("/marvel", { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        login
      </button>
    </div>
  );
};
