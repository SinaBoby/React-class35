import './App.css';
import NavList from './components/NavList';
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';

function App() {
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);

  return (
    <div className="App">
      <Header />
      <NavList setLoading={setIsLoadingProduct} />
      <main>
        <ProductList
          setLoading={setIsLoadingProduct}
          isLoading={isLoadingProduct}
        />
      </main>
    </div>
  );
}

export default App;
