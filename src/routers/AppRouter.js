import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";


//creamos nuestras rutas con un componente padre browserRouter, el enrutador Routes y los componentes hijos Route
export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginScreen />} />

            <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
    </BrowserRouter>
  );
};
