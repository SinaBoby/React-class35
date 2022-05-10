import React, {useContext} from 'react'
import { FavoritesContext } from '../FavoritesContext'
import ProductCard from './ProductCard'
import useFetch from '../hooks/useFetch'

import Header from './Header'
const Favorites = () => {
  const {favorites} = useContext(FavoritesContext)
  const [products, loading, error] = useFetch('https://fakestoreapi.com/products')
  const favoriteProducts= products.filter(prod => favorites.indexOf(prod.id) >= 0)
  console.log(favoriteProducts)

  console.log(favorites)
  return(
    <div>
      <Header/>
      <ul className="product__list">
    {loading ? (
      <h2>Loading...</h2>
    ) : error ? <h2>{error.message}</h2>  :(
      favoriteProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))
    )}
    </ul>
    </div>
    
  )
}

export default Favorites