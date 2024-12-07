import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pokemon/:id" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App