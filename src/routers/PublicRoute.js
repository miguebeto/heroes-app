import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

//componente que se encarga de mantener privadas las ruta del dashboard si el usuario esta logueado
export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    
    return user.logged
        ? <Navigate to="/marvel" />
        : children
}
