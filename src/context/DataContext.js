import { createContext, useContext } from "react";


export const DataContext = createContext({
  productArray: [{}],
  cart:[],
  addToCart:()=>{},
  removeFromCart:()=>{},
  makeCartEmpty:()=>{},
  totalCost:''
})

export const DataContextProvider = DataContext.Provider

export const UseData =()=>{
  return useContext(DataContext)
}