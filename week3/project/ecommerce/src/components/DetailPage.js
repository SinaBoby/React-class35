import React from "react"
import PropTypes from 'prop-types';


function DetailPage({product}) {
   return (
     <div className="detail-page">
       <div className="title-container">
       <h1>{product.title}</h1>
       </div>
       
       <div className="product-detail-info">
         <div className="product-detail--image">
           <div className="product-image--container">
           <img className={'product-image'} src={product.image} alt={product.title}/>
           </div>
         </div>
       <p className="product-dateil--decription">{product.description}</p>

       
       </div>
       
     </div>
   )
}
DetailPage.propTypes = {
  product: PropTypes.object.isRequired
}
export default DetailPage