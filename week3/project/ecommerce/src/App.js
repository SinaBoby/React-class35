import './App.css';
import NavList from './components/NavList';
import { ProductProvider } from './ProductContext';
import React,{  useState } from 'react';

import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true)


  return (
    <ProductProvider>
  <div className="App">
      <header>
        <h1>Products</h1>
        <NavList setLoading={setIsLoadingProduct}    />
      </header>
      <main>
        {isLoadingProduct? <h2>Is Loading...</h2> :<ProductList  />}
      </main>
    </div>
    </ProductProvider>
  
  );
}

export default App;
