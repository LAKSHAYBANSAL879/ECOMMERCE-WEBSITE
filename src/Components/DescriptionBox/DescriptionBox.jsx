import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='mt-10 ml-10 p-4'>
        <div className='flex flex-row'>
            <div className='bg-gray-300 cursor-pointer font-bold border-zinc-950 border-2 w-fit p-2'>Descriptions</div>
            <div className='bg-gray-200 cursor-pointer font-bold border-zinc-950 border-2 w-fit p-2'>Review(122)</div>
        </div>
        <div className='flex w-3/4  bg-gray-100 border-gray-200 border-2 '>
            <p className='text-base'>Introducing our Classic Men's Winter Jacket: a stylish and functional cold-weather companion. Crafted with premium, water-resistant materials and advanced insulation, it provides exceptional warmth without bulk. Its timeless design suits various occasions, and practical features like multiple pockets and adjustable fit make it a versatile choice. Machine washable for easy care, this jacket is your go-to solution for staying warm and stylish during the chilly months.</p>
        </div>
    </div>
  )
}
export default DescriptionBox;