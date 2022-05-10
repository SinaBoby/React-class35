import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DetailProduct from './components/DetailProduct.js'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Favorites from './components/Favorites';
import { FavoritesProvider } from './FavoritesContext';
import { ProductProvider } from './ProductContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
  <FavoritesProvider>

  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/product/:id' element={<DetailProduct/>}/>
    </Routes>
   
  </Router>
  </FavoritesProvider>
  </ProductProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
