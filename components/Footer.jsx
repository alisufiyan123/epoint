import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      <p>2022 E-Point | All rights reserved</p>
    </div>
  )
}

export default Footer

{/*
import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footer-container'>
    <p>2022 E-Point | All rights reserved</p>
    <p className='icons'>
    <AiFillInstagram />
    <AiOutlineTwitter />
    </p>
    </div>
  )
}

export default Footer
*/}