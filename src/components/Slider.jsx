import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import SliderImage from "../img/slider.png";
import SliderImageSmall from "../img/slidersmall.png";



SwiperCore.use(Pagination);

const Slider = () => {
  return (
    <section className="slider">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <picture>
            <source srcset={SliderImageSmall} media="(max-width: 600px)"></source>
            <img
            src={SliderImage}
            alt="sliderImage"
            className="slider__image"
          ></img>
          </picture> 
        </SwiperSlide>
        <SwiperSlide>
        <picture>
            <source srcset={SliderImageSmall} media="(max-width: 600px)"></source>
            <img
            src={SliderImage}
            alt="sliderImage"
            className="slider__image"
          ></img>
          </picture> 
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
