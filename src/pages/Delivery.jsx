import React from 'react';
import {Banner, BannerStatistics, Slider} from "../components";

const Delivery = () => {

  return (
    <div className="container">
        <h2>Страница доставки</h2>
      <Banner>
        <BannerStatistics/>
      </Banner>
      <Slider />
    </div>
  )
}

export default Delivery;