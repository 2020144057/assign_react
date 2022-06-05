import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { BeerDetail } from './pages/BeerDetail';
import { BeerCamera } from './pages/BeerCamera';
import { DomesticBeerList } from './pages/DomesticBeerList';
import { ForeignBeerList } from './pages/ForeignBeerList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/list/domestic' element={<DomesticBeerList/>} />
        <Route path='/list/foreign' element={<ForeignBeerList />} />
        <Route path='/detail' element={<BeerDetail/>} />
        <Route path='/camera' element={<BeerCamera/>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

