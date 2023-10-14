import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'
export default function Popular() {
  return (
    <div className='w-full '>
        <div className='flex flex-col  justify-center items-center gap-2 '>
<h1 className='text-5xl font-extrabold font-mono'>POPULAR IN WOMEN</h1>
<hr className='w-64 h-2 rounded-3xl bg-black align-middle mt-2'/>
</div>
<div className='flex flex-row justify-center items-center align-middle pl-10'>
    {data_product.map((item,i)=>{
return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
    })}
</div>
    </div>
  )
}
