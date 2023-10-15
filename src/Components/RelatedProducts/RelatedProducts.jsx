import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'
export const RelatedProducts = () => {
  return (
    <div> 
        <div className='flex flex-col justify-center items-center align-middle '>
        <h1 className='text-2xl font-bold ml-20'>Related Products</h1>
        <hr className='w-20 bg-black h-2 rounded-3xl ml-20 mt-2'/>
        </div>
       
        <div className='flex flex-row justify-center '>
{data_product.map((item,i)=>{
return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
    
})}
        </div>
    </div>
  )
}
