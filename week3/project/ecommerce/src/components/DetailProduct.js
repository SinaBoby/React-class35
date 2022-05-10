import React from "react"
import useFetch from "../hooks/useFetch"

import {useParams} from 'react-router-dom'
import DetailPage from './DetailPage'

function DetailProduct(){

  const {id} = useParams()
  const [product, isLoading, error] = useFetch(`https://fakestoreapi.com/products/${id}`)

return (<div className='detailCard'>
 {isLoading ? <h2>Is Loading...</h2> : error ? <h2>{error.message}</h2> : <DetailPage product={product} /> }

</div>
)
}
export default DetailProduct