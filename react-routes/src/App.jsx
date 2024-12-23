import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import PokemonSingle from './pages/PokemonSingle';
import NotFound from './pages/NotFound';
import PokemonArchive from './pages/PokemonArchive';
import TypesArchive from './pages/TypesArchive';
import RegionsArchive from './pages/RegionsArchive';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="types" element={<TypesArchive />} />
          <Route path="regions" element={<RegionsArchive />} />
          <Route path="pokemons" element={<PokemonArchive />} />
          <Route path="pokemons/:id" element={<PokemonSingle />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
