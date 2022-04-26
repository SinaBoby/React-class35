import './App.css';
import NavList from './components/NavList';

import { useState } from 'react';

import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedcategory, setSelectedCategory] = useState([])
  
 console.log(selectedcategory)

  return (
    <div className="App">
      <header>
        <h1>Products</h1>
        <NavList setProducts={setProducts} setSelectedCategory={setSelectedCategory}  />
      </header>
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;
