import './App.css';
import NavList from './components/NavList';

import React,{  useState } from 'react';

import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true)


  return (
    <div className="App">
      <header>
        <h1>Products</h1>
        <NavList setLoading={setIsLoadingProduct} setProducts={setProducts}   />
      </header>
      <main>
        {isLoadingProduct? <h2>Is Loading...</h2> :<ProductList products={products} />}
      </main>
    </div>
  );
}

export default App;
