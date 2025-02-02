import { useEffect, useState } from "react";
import "./App.css";
import { CartDiv, Header, Footer, ProductDiv, products } from "./components";
import { DataContextProvider } from "./context";

import { Outlet } from "react-router-dom";

export default function App() {
  let [cart, setCart] = useState([]);
  const productArray = products;
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (productId) => {
    const product = cart.find((item) => item.id === productId);
    if (!product) return; // Check if the product exists
    if (product.quantity === 1) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };
  const makeCartEmpty = ()=>{
    setCart([])
  }
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart && cart.length > 0) {
      setCart(cart);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <DataContextProvider
      value={{ productArray, cart, addToCart, removeFromCart,makeCartEmpty, totalCost }}
    >
      <Header />
      <Outlet />
      <Footer />
    </DataContextProvider>
  );
}
