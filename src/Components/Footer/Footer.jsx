import React from 'react'
import logo from '../Assets/logo_big.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import instagram from '../Assets/instagram_icon.png'
import pintrest from '../Assets/pintester_icon.png'
export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center mt-15 gap-5 '>
        <div className='flex flex-row justify-center items-center gap-3'><img src={logo} alt="" />
        <h1 className='text-3xl font-bold'>SHOPPER</h1></div>
<div className='flex flex-row gap-3 text-xl cursor-pointer'>
    <h2>Company</h2>
    <h2>About</h2>
    <h2>Products</h2>
    <h2>Offices</h2>
    <h2>Contact</h2>

</div>
<div className='flex flex-row gap-3 mt-1 cursor-pointer mb-5'>
<img src={whatsapp} alt="" className='w-6' />
<img src={instagram} alt="" className='w-6'/>
<img src={pintrest} alt="" className='w-6' />

</div>
<h2>&copy;Copyright Lakshay Bansal</h2>
    </div>
  )
}
