import React from 'react'

export default function Item(props) {
  return (
    <div className='flex flex-col  w-80 h-auto pt-3 pb-3 '>

<img src={props.image} alt="" className='w-64 cursor-pointer rounded-2xl'/>
<h2 className='flex justify-center align-middle items-center text-lg w-64 font-bold '>{props.name}</h2>
<div className='flex flex-row items-center align-middle gap-5'>
    <div className='text-xl font-extrabold'>
        ${props.new_price}
    </div>
    <div className='text-gray-600 text-lg  line-through  line'>
        ${props.old_price}
    </div>
</div>
    </div>
  )
}
