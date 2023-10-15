import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext= createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index<all_product.length;index++){
        cart[index]=0;
    }
    return cart;
   
}
const ShopContextProvider=(props)=>{

    const [cartItems,setcartItems]=useState(getDefaultCart());
   
const addtoCart=(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems);

}
const removefromCart=(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}
const getTotalCartItem=()=>{
    let totalAmount=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo = all_product.find((product)=>product.id===Number(item));
       totalAmount+=itemInfo.new_price * cartItems[item];
        }
        
    }
    return totalAmount;
}
const getTotalItem=()=>{
let totalItem=0;
for( const item in cartItems){
    if(cartItems[item]>0){
        totalItem+=cartItems[item];
    }
}
return totalItem;
}
const contextValue={getTotalItem,getTotalCartItem,all_product,cartItems,addtoCart,removefromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;