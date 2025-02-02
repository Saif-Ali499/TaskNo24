import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseData } from "../context";

function Order() {
  const [cartEmp, setCartEmp] = useState([])
  const { cart, productArray, addToCart, totalCost,makeCartEmpty, removeFromCart } =
    UseData();
    return (
    <div id="wraperDiv" >
      <div id="products" className="bg-slate-400">
        <div
          className="w-[40rem] mx-h-[25rem] flex gap-2 mt-2.5 pt-2.5
        "
        >
          <form>
            <div className="flex text-xl justify-center w-full">
              <input
                className=""
                type="radio"
                id="CoD"
                name="Payment_Mode"
                value="CoD"
              />
                <label htmlFor="CoD">Cash On Delivery</label> {" "}
              <input
                className=""
                type="radio"
                id="CC"
                name="Payment_Mode"
                value="CC"
                defaultChecked
              />
                <label htmlFor="CC">Credit Card</label>
            </div>
            <div className="grid bg-amber-100 text-2xl gap-5 justify-center content-center w-[40rem] h-[22rem] border-2 border-black">
              <div className="grid bg-amber-100 text-2xl gap-5 justify-center content-center w-[20rem] h-[15rem] border-2 border-black">
                <input
                  className="border-2 border-black rounded-2xl p-[5px]"
                  type="number"
                  name="CardNo"
                  id="CardNo"
                  placeholder="Enter Card No"
                />
                <input
                  className="border-2 border-black rounded-2xl p[5px]"
                  type="text"
                  name="CardName"
                  id="CardName"
                  placeholder="Enter Name"
                />
                <input
                  className="border-2 border-black rounded-2xl p[5px]"
                  type="number"
                  name="cvvNo"
                  id="cvvNo"
                  placeholder="CVV"
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="border-2 border-black rounded-2xl p-5 w-[15rem]"
                  onClick={() => {
                    makeCartEmpty()
                    alert("Order Placed Successfully");
                  }}
                ><Link to='/'>Confirm Payment</Link>
                  
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div id="cart" className="">
        <h1>
          <strong>Items to Buy</strong>
        </h1>
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
              </div>
            ))
          ) : (
            <div>No Items To Buy</div>
          )}
        </div>
        <div id="totalCost" className="w-full">
          Grand Total = {totalCost}
          <div className="placeOrder">
            <Link to="/">Go Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
