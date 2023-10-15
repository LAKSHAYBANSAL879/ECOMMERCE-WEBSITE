import React from 'react'

export default function LoginSignup() {
  return (
    <div className='flex justify-center mt-20 mb-20'>
      <div className= 'flex flex-col justify-center items-center align-middle bg-gradient-to-tl from-pink-300 to-white w-1/2 p-10'>
      <div>
        <h1 className='text-4xl font-bold  mb-10'>Signup</h1>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center w-full ">
        <input type="text" name="" id="" placeholder='Full Name' className=' w-96 h-10 rounded-3xl p-2 text-xl font-bold '/>
        <input type="email" name="" id="" placeholder='Email' className=' w-96 h-10 rounded-3xl p-2 text-xl font-bold '/>
        <input type="password" name="" id="" placeholder='password' className=' w-96 h-10 rounded-3xl p-2 text-xl font-bold '/>


<button className='w-48 bg-white rounded-3xl p-2 font-extrabold'>Continue</button>
      <h2 className='flex items-start text-xl font-bold'><h3>Already Have Account ?</h3><p className='text-blue-500 ml-5'>Login</p></h2>
      </div>
      </div>
      
    </div>
  )
}
