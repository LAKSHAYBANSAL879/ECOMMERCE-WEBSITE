import React, { useState } from "react";
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';
import { Link } from "react-router-dom";
const Navbar=()=>{
    const [menu,setMenu]=useState("shop");
    return (
<div className="flex flex-row justify-around items-center  h-20 pt-5 pb-5 align-middle bg-white">
<div className="flex flex-row ml-10">
    <img src={logo} alt="" />
    <h1 className="text-3xl font-mono font-bold ml-2 mt-5">SHOPPER</h1>
</div>
<div >
    <ul className="flex flex-row gap-5 text-xl font-bold cursor-pointer">
        <li onClick={()=>{setMenu("shop")}} className="hover:border-b-orange-700 hover:border-b-4 outline-none pb-2"><Link to='/' className="no-underline">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        < li onClick={()=>{setMenu("mens")}} className=" hover:border-b-orange-700 hover:border-b-4 outline-none pb-2"><Link to='/mens'>Men</Link>{menu==="men"?<hr/>:<></>}</ li >
        < li onClick={()=>{setMenu("womens")}} className=" hover:border-b-orange-700 hover:border-b-4 outline-none pb-2"><Link to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</ li >
        <li onClick={()=>{setMenu("kids")}} className=" hover:border-b-orange-700 hover:border-b-4 outline-none pb-2"><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>

    </ul>
</div>
<div className="flex flex-row mr-10">
   <Link to='/signup'> <button className="w-28 text-xl font-semibold border-2 border-black rounded-3xl hover:bg-red-500 hover:text-white pb-1">Login</button></Link>
    <Link to='/cart'><img src={cart} alt="" className="ml-2 w-8 cursor-pointer"/></Link>
    <div className=" flex justify-center align-middle items-center text-white bg-red-500 w-5 h-5 text-center  rounded-t-xl rounded-b-xl -mt-1 -ml-3">0</div>
</div>
</div>
    )
}
export default Navbar;