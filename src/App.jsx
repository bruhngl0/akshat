

import Header from './components/Header'
import Hero from './components/Hero'
import Shop from './components/Shop'
import Slider from './components/Slider'
import Poster from './components/Poster'
import Footer from './components/Footer'


import '../src/styles/Header.scss'
import '../src/styles/hero.scss'
import '../src/styles/shop.scss'
import '../src/styles/poster.scss'
import '../src/styles/footer.scss'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



function App() {


  return (
    <>
   <Header />
   <Hero />  
   <Shop />
   <Slider />
   <Shop />
   <Poster />
   <Footer />
    </>
  )
}

export default App
