import React from "react"

import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import DetailPage from './DetailPage'

function DetailProduct(){
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const {id} = useParams()
  useEffect(() => {
    (async () => {
      try{
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      const json = await response.json()
      console.log(json)
       setProduct(json)
       setIsLoading(false)
      }catch(error){
        console.log(error)
      }
    })()
  },[id])
return (<div className='detailCard'>
 {isLoading ? <h2>Is Loading...</h2> : product ? <DetailPage product={product} /> : <h2>no product</h2> }

</div>
)
}
export default DetailProduct