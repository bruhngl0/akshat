import React from 'react'
import Hero from './Hero'
import Shop from './Shop'
import Slider from './Slider'
import Poster from './Poster'
import Header from './Header'
import Footer from './Footer'
import ShopOne from './Shop0ne'

import '../styles/Header.scss'
import '../styles/hero.scss'
import '../styles/shop.scss'
import '../styles/poster.scss'
import '../styles/footer.scss'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Home = () => {
  return (
    <div>
     <Header />
     <Hero />  
     <Shop />
   
     <ShopOne />
     <Poster />
     <Footer />
    </div>
  )
}

export default Home
