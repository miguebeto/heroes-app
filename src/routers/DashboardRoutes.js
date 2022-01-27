import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/ui/NavBar';
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroScreen } from '../components/hero/HeroScreen';

// Constante que se encarga de encontrar el elemento que concida con el la direccion o con el id que se le pasa por parametro
export const DashboardRoutes = () => {
  return (
    <>  
        <Navbar />
        <div className="container">
          <Routes>
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DcScreen />} />

              <Route path="search" element={<SearchScreen />} />
              <Route path="hero/:heroId" element={<HeroScreen/>} />

              <Route path="/" element={<MarvelScreen />} />
          </Routes>
        </div>
    </>
  )
};
