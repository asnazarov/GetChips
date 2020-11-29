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
} from "../index";
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
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className='swiper__slide'><img src={oneJpg} alt="slide 1"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={twoJpg} alt="slide 2"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={threeJpg} alt="slide 3"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={fourJpg} alt="slide 4"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={fiveJpg} alt="slide 5"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={sixJpg} alt="slide 6"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={sevenJpg} alt="slide 7"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={eightJpg} alt="slide 8"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={nineJpg} alt="slide 9"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={tenJpg} alt="slide 10"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={elevenJpg} alt="slide 11"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={twelveJpg} alt="slide 12"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={thirteenJpg} alt="slide 13"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={fourTeenJpg} alt="slide 14"/></SwiperSlide>
            <SwiperSlide className='swiper__slide'><img src={fifteenJpg} alt="slide 15"/></SwiperSlide>
          </Swiper>
          <SwiperButtonNext />
        </div>

      </div>

    </section>
  )
}

export default Slider;