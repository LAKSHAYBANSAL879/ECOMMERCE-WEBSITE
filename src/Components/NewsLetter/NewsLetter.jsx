import React from 'react'

export default function NewsLetter() {
  return (
    <div className='flex justify-center ml-32 items-center bg-white w-4/5 rounded-xl  h-64'>
    <div className='flex flex-col justify-center gap-3 items-center align-middle mt-10'>
<h1 className='font-bold font-serif text-4xl '>Get Exclusive Offers On Your Email</h1>
<h2>Subscribe to our newsletter and stay updated</h2>
<div className='border-2  border-black w-96 rounded-3xl '>
<input type="email" name="" id="" className='rounded-3xl w-3/4 p-2 border-none outline-none' placeholder='Enter your email'/>
<button className='bg-black w-1/4 rounded-3xl text-white h-10'>Subscribe</button>
</div>
    </div>
    </div>
  )
}
