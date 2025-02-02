import React from 'react'
import { DataContext,DataContextProvider,UseData } from '../context'
import "../App.css";
import { Link } from 'react-router-dom';

function CartDiv() {
 console.log("in cart");
 const{cart,productArray,addToCart,totalCost,removeFromCart} = UseData()
  return (
    <div id="cart" className=''>
          <h1><strong>CART</strong></h1>
          <div className="cartItemsCard">
            {cart && cart.length > 0 ? (
              cart.map((item) => (
                <div className="itemWraper" key={item.id}>
                  <div className="itemImgs">
                    <img className="itemImg" src={item.image} alt="image" />
                  </div>
                  <div className="ItemDetails">
                    <div className="itemDetails">{item.name}</div>
                    <div className="itemDetails">-</div>
                    <div className="itemDetails">Price- ${item.price}</div>

                    
                  </div>
                  <div className='grid gap-1 content-center p-5'>
                  <button
                    
                    key={item.id}
                    className="h-auto w-15 text-xl font-bold mx-10 rounded-2xl bg-green-700"
                    onClick={() => addToCart(item)}
                  >
                    ++
                  </button>
                  
                  <div className="">
                      (Qty: {item.quantity})
                    </div>
                    <button
                    className="h-auto w-15 text-xl font-bold mx-10 rounded-2xl bg-red-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    --
                  </button>
                  </div>
                </div>
              ))
            ) : (
              <div>
                Add Items to Cart
              </div>
            )}
          </div>
          <div id="totalCost" className='w-full'>
          Grand Total = {totalCost}
          <div        className="placeOrder">
          <Link
          to="Order"
          >Proceed to Pay</Link></div>
        </div>
        </div>
  )
}

export default CartDiv