import './App.css';
import NavList from './components/NavList';

import { useState } from 'react';

import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  return (
    <div className="App">
      <header>
        <h1>Products</h1>
        <NavList
          setProducts={setProducts}
          setProdLoading={setLoading}
          setProdError={setError}
        />
      </header>
      <main>
        {loading ? (
          <h2>is Loading...</h2>
        ) : error ? (
          <h2>{error.message}</h2>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </div>
  );
}

export default App;
