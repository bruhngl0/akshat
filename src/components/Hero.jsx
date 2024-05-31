import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
         <div className='hero-one'>
           <h1>LIVE THAT SILVER LIFE </h1>

           <p>Find jewellery for each and every occassion and dazzle your style</p>
         </div>


         <div className='hero-two'>
            <p>Best-Selling Products</p>
            <div className='hero-image-container'>
            <a href="https://shop.shinesilver.store/products/35">
             <img src= "best3.png" />
             </a>

             <a href="https://shop.shinesilver.store/products/28">
            <img src = "best1.png"/>
            </a>

            <a href="https://shop.shinesilver.store/products/23">
            <img src = "best2.png"/>
            </a>
          </div>
         </div>
    </div>
  )
}

export default Hero
