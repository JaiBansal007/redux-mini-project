import React, { useEffect, useState } from 'react'
import {AiFillCarryOut } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
const Header = () => {
  const cartitems=useSelector((state) => state.cart.cartitems );
  
  return (
    <nav>
      <h2>logo</h2>

      <div>
        <Link to={"/"} element={<Home/>}>Home</Link>
        <Link to={"/cart"} element={<Cart/>}>
          <AiFillCarryOut/>
          <p>{cartitems.length}</p>
        </Link>
      </div>
    </nav>
  )
}

export default Header
