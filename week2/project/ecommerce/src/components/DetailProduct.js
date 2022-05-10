import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import DetailPage from './DetailPage'

function DetailProduct(){
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
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
        setError(error)
        setIsLoading(false)
      }
    })()
  },[id])
return (<div className='detailCard'>
 {isLoading ? <h2>Is Loading...</h2> : error ? <h2>{error.message}</h2> :  <DetailPage product={product} />  }

</div>
)
}
export default DetailProduct