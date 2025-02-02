import React from 'react'
import "../App.css";
function Header() {
  return (
    <div
          id="navBar"
          className="z-50 bg-slate-200 fixed"
        >
          <div className="">
            <img
              className="imgTag w-10 h-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmt3cgrOf1tK4H9GSty9uoPaucdmr8IFurA&s"
              alt="img"
            />
          </div>
          <div className="navOptions">Home</div>
          <div className="navOptions">Categories</div>
          <div className="navOptions">About Us</div>
        </div>
  )
}

export default Header