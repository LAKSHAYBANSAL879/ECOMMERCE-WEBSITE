import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
  const {product}=props;
  const {addtoCart}=useContext(ShopContext);
    return (
        <div className='flex flex-row mt-10 mb-10' >
            <div className='flex flex-row items-start justify-start align-middle ml-10'>
                <div className='flex flex-col w-20 h-20 gap-3 mr-10'>
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    </div>
    <div>
        <img src={product.image} alt="" className='h-3/4'/>
    </div>
            </div>
            <div className='flex flex-col ml-10'>
    <h1 className='text-4xl font-extrabold'>{product.name}</h1>
    <div className='flex mt-2 gap-2 items-center'>
        <img src={star_icon} alt="" className='w-3 h-5'/>
        <img src={star_icon} alt="" className='w-3 h-5' />
        <img src={star_icon} alt="" className='w-3 h-5'/>
        <img src={star_icon} alt="" className='w-3 h-5'/>
        <img src={star_dull} alt="" className='w-3 h-5'/>
    <p className='text-lg'>(122)</p>
    </div>
    <div className='flex items-center mt-2'>
        <h1 className='line-through text-xl text-gray-400 font-semibold'>${product.old_price}</h1>
        <h1 className='ml-8 text-3xl font-bold text-red-500'>${product.new_price}</h1>
    </div>
    <div className='mt-7'>
        <p className='text-lg'>A lightweight , Usually Knitted,pullover , cloase-fiiting , and with <br />a round machine and short sleeves ,worn as outer garment</p>
    </div>
    <div className='flex flex-col mt-2'>
        <h1 className='text-xl font-bold mb-2'>Select Sizes</h1>
        <div className='flex flex-row items-center gap-4 text-center'>
            <button className='bg-gray-100 p-2 w-9 h-10 text-lg flex justify-center hover:bg-red-400 hover:text-white '>S</button>
            <button className='bg-gray-100 p-2 w-9 h-10 text-lg flex justify-center  hover:bg-red-400 hover:text-white '>M</button>
            <button className='bg-gray-100 p-2 w-9 h-10 text-lg flex justify-center  hover:bg-red-400 hover:text-white '> L</button>
            <button className='bg-gray-100 p-2 w-9 h-10 text-lg flex justify-center  hover:bg-red-400 hover:text-white '>XL</button>
            <button className='bg-gray-100 p-2 w-9 h-10 text-lg flex justify-center  hover:bg-red-400 hover:text-white '>XXL</button>

        </div>
    </div>
    <div className='mt-4'>
        <button onClick={()=>{addtoCart(product.id)}} className='bg-red-500 text-xl font-bold hover:bg-gray-100 hover:text-black text-white w-48 p-2 rounded-xl'>Add to Cart</button>
    </div>
    <div className='mt-2'>
<p><span className='font-bold'>Category:</span>Mens,Winter</p>
<p><span className='font-bold'>Tags:</span>Fashion,men,kids,jacket</p>
    </div>
            </div>
        </div>
      )
}
export default ProductDisplay;