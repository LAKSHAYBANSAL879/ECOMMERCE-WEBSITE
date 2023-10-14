import React from 'react'
import popimg from '../Assets/exclusive_image.png'
export default function Offers() {
  return (
    <div className='flex flex-row w-4/6 ml-64 mt-10 rounded-xl justify-around bg-white p-4'>
        <div className='flex flex-col gap-3 justify-center'>
            <h1 className='text-5xl font-bold font-mono'>Exclusive</h1>
            <h1 className='text-5xl font-mono font-bold text-red-600'>Offers For You</h1>
            <h3 className='text-lg font-semibold'>ONLY ON BESTSELLERS PRODUCT</h3>
            <button className='bg-red-600 text-white text-lg w-32 rounded-3xl p-2'>Check now</button>
        </div>
        <img src={popimg} alt="" className='w-64 h-76'/>
    </div>
  )
}
