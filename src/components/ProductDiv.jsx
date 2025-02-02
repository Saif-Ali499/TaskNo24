import React from 'react'
import { UseData } from '../context'; 
function ProductDiv() {
 console.log("in Product div");
 const{cart,productArray,addToCart,totalCost,removeFromCart} = UseData()
  return (
    <div id="products">
          {productArray.map((product) => (
            <div className="productCard">
              <img className="sImg" src={product.image} alt="S1" />
              <div className="productInfo">
                <p className="Name">{product.name}</p>
                <p className="Price">
                  <strong>price: ${product.price}</strong>
                </p>
                <button
                  key={product.id}
                  className="Add"
                  onClick={() => addToCart(product)}
                >
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
  )
}

export default ProductDiv