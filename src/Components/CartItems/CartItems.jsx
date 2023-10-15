import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const {getTotalCartItem,all_product,cartItems,removefromCart}=useContext(ShopContext)
  return (
    <div className='flex flex-col '>
<div className='flex flex-row justify-around text-xl font-extrabold mb-2'>
    <p>Products</p>
    <p className='ml-28'>Title</p>
    <p className='ml-64'>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
    </div>
    <hr />
   {all_product.map((e)=>{
    if(cartItems[e.id]>0){
        return  <div key={e.id} className='flex flex-col '>
        <div className='flex flex-row justify-around items-center align-middle gap-1  h-28'>  
            <img src={e.image} alt="" className='w-20 '/>
            <p className='w-64 font-bold text-xl'>{e.name}</p>
            <p className='font-bold text-xl '>${e.new_price}</p>
            <button className='font-bold text-xl border-gray-300 border-2 w-7'>{cartItems[e.id]}</button>
            <p className='font-bold text-xl'>${e.new_price*cartItems[e.id]}</p>
            <img src={remove_icon} alt=""className='w-4 h-4 cursor-pointer' onClick={()=>{removefromCart(e.id)}} />
        </div>
        <hr />
    </div>
    }
    return null;
   })}
   <div className='flex flex-row items-center'>
   <div className='flex flex-col'>
      <div className='flex flex-col justify-center ml-20 mt-2 w-1/2'>
        <h1 className='text-4xl font-bold '>Cart Totals</h1>
        <div className='flex flex-row justify-between w-96 text-lg font-semibold mt-3 '>
            <p>SubTotal</p>
            <p>${getTotalCartItem()}</p>
         </div>
         <hr className='bg-gray-400 h-1 w-96' />
         <div className='flex flex-row justify-between w-96 text-lg font-semibold mt-3 '>
            <p>Shipping Fee</p>
            <p>Free</p>
        </div>
        <hr className='bg-gray-400 h-1 w-96'/>
        <div className='flex flex-row justify-between w-96 text-lg font-extrabold mt-3 '>
            <h3>Total</h3>
        <h3>${getTotalCartItem()}</h3>
         </div>
         </div>
     <button className='mt-3 ml-20 bg-red-400 w-48 rounded-xl text-white p-2'>Procced to checkout</button>
   </div>
    <div className='ml-64 flex flex-col gap-3'>
    <p className='text-xl font-bold font-mono'>If you have promo code enter here</p>
    <div className='flex flex-col justify-start items-start'>
        <input className='bg-gray-300 w-96 p-2 rounded-xl' type="text" name="" id="" placeholder='promo'/>
        <button className='text-white bg-black p-2 mt-5 text-xl font-bold rounded-xl'>Sumbit</button>
    </div>
   </div>
   </div>
   </div>
  )
}
