import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
export default function ShopCategory(props) {
    const {all_product}=useContext(ShopContext);
  return (
    <div className=''>
<img src={props.banner} alt="" className='w-9/12 bg-white m-auto' />
<div>
    <p>
        <span>Showing 1-12 results</span>ourt of 36 products
    </p>
</div>
<div>
    Sort by <img src={dropdown_icon} alt=''/>
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
    </div>
  )
}
