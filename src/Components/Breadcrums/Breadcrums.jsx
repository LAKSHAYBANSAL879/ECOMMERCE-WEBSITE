import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'
export default function Breadcrums (props) {
    const {product} = props;
  return (
    <div className='flex ml-10 mt-5'>
  HOME <img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt=''/> {product.category}  <img src={arrow_icon} alt=''/> {product.name}
 
    </div>
  )
}
