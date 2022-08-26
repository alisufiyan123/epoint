import React, { useRef,useState, useEffect } from 'react';
import emailjs from "emailjs-com";
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
import { Product } from '../components';
import { client,urlFor } from '../lib/client';


const emailForm = () => {
    const form = useRef();
    const { totalPrice, totalQuantities, cartItems, setCartItems, setTotalPrice, setTotalQuantities, _id, qty } = useStateContext()
    console.log("Items details")
    console.log(cartItems);
    
    

    function subfunc() {
    }


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ldl4c8d', 'template_ndjmtoe', form.current, 'g8Wlk8YJ3nkqgNsPf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          toast.success("Order Placed");
          form.current.reset();
          

          window.setTimeout(subfunc = () => {
            window.location.href = "/cashMethod"
        }, 3000);
      };
    

  return (
    <div> 
        <div className="cardd">
            <form ref={form} onSubmit={sendEmail}>
                    <input type="text" className="inputt" placeholder='Full Name' name="name" required /><br/>
                    <input type="text" className="inputt" placeholder='Phone No' name="phonenumber" required /><br/>
                    <input type="text" className="inputt" placeholder='Province' name="province" required /><br/>
                    <input type="text" className="inputt" placeholder='City' name="city" required /><br/>
                    <input type="text" className="inputt" placeholder='Shipping Address' name="shippingaddress" required /><br/>
                    <input type="text" className="inputt" placeholder='Email' name="email" required /><br/> 
                    <input className='ttt' name="itemname" value={cartItems.map((item) => (item.name))}></input>
                    <input className='ttt' name="itemquantity" value={cartItems.map((item) => (item.quantity))}></input>
                    <input className='ttt' name="totalprice" value={totalPrice}></input>
                    <input type='submit' value="Confirm Order" className="btncash"/>
            </form>

            {/*
            <div className='executee'>
                <Link href="/cashMethod" />
            </div>
        */}
            
        

        </div>
            <div className="receiptt">
                    <div className='rec-cont2'>
                    <h2>Seller Name: <span className='item-textt-main'>E-Point</span></h2>
                        <h2 style={{fontSize: 26, marginTop:20}} >Your Cart Items: </h2>
                        <h2>
                            {cartItems.map((item) => (
                            <>
                                <p style={{fontWeight: 600}}>Item:<span className='item-textt-main'>{item.name}</span></p>
                                <p style={{fontWeight: 600}}>Price:<span className='item-textt-main'>{item.price}</span></p>
                                <p style={{fontWeight: 600, marginBottom: 20}}>Quantity:<span className='item-textt-main'>{item.quantity}</span></p>
                            </>
                            ))}
                        </h2>
                            <h2>Be ready with Amount:<span className='item-textt-main'>{totalPrice}</span></h2>
                            <h2 style={{fontWeight: 600}}>Total Items:<span className='item-textt-main'>{totalQuantities}</span></h2>
                            <br/>
            </div>
        </div>
    </div>
  )
}


export default emailForm



{/* 
<h2 className="sellerr">{cartItems.map((item) => (
    <div>
                        
    <p>{item.name}</p>
    <p>Rs: {item.price}</p>
    </div>
))}</h2>

*/}

// this part is scopied from stripe.js because it was used in fetching the data from that console.log()
// at timestamp 2:55:00++ 

// line_items: req.body.map((item) => {
//                     const img  = item.image[0].asset._ref;
//                     const newImage = img.replace('image-', 'https://cdn.sanity.io/images/1fywbtdd/production/').replace('-webp', '.webp');

//                     return{
//                         price_data: {
//                             currency: 'pkr',
//                             product_data: {
//                                 name: item.name,
//                                 images: [newImage],
//                             },
//                             unit_amount: item.price * 100,
//                         },
//                         adjustable_quantity: {
//                             enabled:true,
//                             minimum: 1,

//                         },
//                         quantity: item.quantity
//                     }
//                 })



