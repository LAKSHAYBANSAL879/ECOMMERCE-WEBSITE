import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'

export default function Shop() {
  return (
<div className='bg-gradient-to-tl from-pink-300 to-white h-full w-full p-10 '>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
       
    </div>
  )
}

