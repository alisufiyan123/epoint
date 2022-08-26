import React, { useState, useEffect } from 'react';
import emailjs from "emailjs-com";
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
import { urlFor } from '../lib/client';



const cashMethod = () => {

    const { totalPrice, totalQuantities, cartItems, setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()
    
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

  return (
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Your order has been Placed!</h2>
        <p className="email-msg">You will receive confirmation call</p>
        <p className="description">
          Incase of questions, please email
          <a className="email" href="mailto:wick7236@gmail.com">
          wick7236@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
  )
}

export default cashMethod
