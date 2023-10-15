import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
export default function ShopCategory(props) {
    const {all_product}=useContext(ShopContext);
  return (
    <div className=''>
<img src={props.banner} alt="" className='w-9/12 bg-white m-auto' />
<div className='flex justify-between mt-10'>
    <p className='ml-10'>
        <span className='font-bold text-xl'>Showing 1-12 results </span>out of 36 products
    </p>
    <div className='mr-20 flex flex-row justify-center items-center align-middle cursor-pointer p-2 rounded-3xl border-black border-2'>
    Sort by <img src={dropdown_icon} alt='' className=' h-2 ml-2'/>
</div>
</div>

<div className='flex flex-row flex-wrap justify-center'>
    {all_product.map((item,i)=>{
        if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
            return null;
        }
    })}
</div>
<div className='flex justify-center '>
    <button className='bg-red-500 text-white w-32 rounded-3xl mt-10 mb-10 p-2'>Explore more</button>
</div>
    </div>
  )
}
