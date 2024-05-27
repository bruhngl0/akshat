import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../../public/modell1.jpg';
import slide_image_2 from '../../public/modell4.jpg';
import slide_image_3 from '../../public/modell3.jpg';
import slide_image_4 from '../../public/modell9.jpg';
import slide_image_5 from '../../public/modell5.jpg';
import slide_image_6 from '../../public/modell7.jpg';
import slide_image_7 from '../../public/modell8.jpg';

const Slider = () => {
  return (
    <div className="container">
      <h1 className="heading">Product Showcase</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        autoplay={true}
        className="swiper_container"
      >
        <SwiperSlide>
          <a href= "https://www.facebook.com">
          <img src={slide_image_1} alt="slide_image" href= "www.facebook.com" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <p name="arrow-back-outline"></p>
          </div>
          <div className="swiper-button-next slider-arrow">
            <p name="arrow-forward-outline"> </p>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;

