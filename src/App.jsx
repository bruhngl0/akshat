


import Landing from './components/Landing'
import Home from './components/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

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


<BrowserRouter>
      
      <Routes>
        <Route path="/" element={< Landing/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    
  </BrowserRouter>
   
    </>
  )
}

export default App
