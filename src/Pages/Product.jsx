import React, { useContext } from 'react'
import  {ShopContext}  from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
 import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export default function Product() {
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_product.find((element)=> element.id === Number(productId));
console.log(product);

  return (
    <div>
<Breadcrums product={product}/>
<ProductDisplay product={product}/>
<DescriptionBox/>
<RelatedProducts/>
    </div>
  )
}
