import React from 'react'
import ProductDiv from './ProductDiv'
import CartDiv from './CartDiv'
import '../App.css'
function Home() {
  return (
    <div id="wraperDiv">
        <div className="">
          <ProductDiv />
        </div>
        <div className="">
          <CartDiv />
        </div>
      </div>
  )
}

export default Home