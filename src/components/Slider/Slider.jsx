import React from 'react';
import SwiperCore, {Navigation, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './slider.scss';
import {
  eightJpg,
  elevenJpg, fifteenJpg,
  fiveJpg,
  fourJpg, fourTeenJpg,
  nineJpg,
  oneJpg,
  sevenJpg,
  sixJpg,
  tenJpg, thirteenJpg,
  threeJpg, twelveJpg,
  twoJpg
} from "./index";
import {SwiperButtonNext, SwiperButtonPrev} from "../Buttons";

SwiperCore.use([Navigation, Scrollbar, A11y, Autoplay]);
const Slider = () => {

  return (
    <section className='slider'>
      <div className='slider__container'>
        <h2 className='slider__title'>Мы не скрываем своих партнёров - мы гордимся ими. Наши партнёры - это глобальные и
          локальные дистрибьюторы с многолетним опытом и хорошей репутацией.</h2>
        <div className="swiper">
          <SwiperButtonPrev/>
          <Swiper
            className="swiper__wrapper"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={30}
            slidesPerView={5}
            breakpoints={{
              // when window width is >= 270px
              270: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              // when window width is >= 470px
              470: {
              slidesPerView: 2,
              spaceBetween: 20
            },
              // when window width is >= 700px
              700: {
              slidesPerView: 3,
              spaceBetween: 30
            },
              // when window width is >= 1130px
              1130: {
              slidesPerView: 5,
              spaceBetween: 40
            }
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className='swiper__slide'><img src={oneJpg} alt="slide 1"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={twoJpg} alt="slide 2"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={threeJpg} alt=""/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={fourJpg} alt=""/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={fiveJpg} alt=""/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={sixJpg} alt=""/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={sevenJpg} alt=""/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={eightJpg} alt=""/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={nineJpg} alt=""/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={tenJpg} alt=""/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={elevenJpg} alt=""/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={twelveJpg} alt=""/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={thirteenJpg} alt=""/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={fourTeenJpg} alt=""/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={fifteenJpg} alt=""/></SwiperSlide>
          </Swiper>
          <SwiperButtonNext />
        </div>

      </div>

    </section>
  )
}

export default Slider;