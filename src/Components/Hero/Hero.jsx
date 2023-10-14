import React from 'react'
import girl from '../Assets/hero_image.png'
import arrow from  '../Assets/arrow.png'
import hand from '../Assets/hand_icon.png'
<as></as>
export default function Hero() {
  return (
    <div className='flex flex-row justify-between'>
<div className='flex flex-col align-middle mt-36 ml-24 gap-5'>
<h2 className='text-lg font-semibold flex flex-row items-center align-middle'><h3>NEW ARRIVALS ONLY </h3><img src={hand} alt="" className='w-12 ml-2'/></h2>
<h1 className='text-7xl font-mono font-extrabold'>new <br />collections <br />for everyone</h1>
<button className='flex w-52 p-2 bg-red-500 rounded-3xl text-white font-bold mt-3 flex-row justify-center align-middle items-center gap-3'><h2>Latest Collections</h2><img src={arrow} alt="" /></button>
</div>
<div>
<img src={girl} alt="" className='ml-24 w-full md:w-8/12 md:h-8/12 w-' />
</div>
    </div>
  )
}
