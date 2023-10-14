import React from 'react'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
export default function NewCollections() {
  return (
    <div className='mt-10 flex flex-col justify-center items-center '>
<h1 className='text-5xl font-extrabold font-mono'>New Collections</h1>
<hr className='w-64 h-2 rounded-3xl bg-black align-middle mt-2'/>
<div className='flex flex-row flex-wrap justify-center mt-10'>
{new_collections.map((item,i)=>{
return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
    })}
</div>
    </div>
  )
}
