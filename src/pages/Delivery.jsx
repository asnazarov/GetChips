import React from 'react';
import {Banner, BannerStatistics, SearchForm, Slider} from "../components";
import {Info, InfoDelivery} from "../components/Info";

const Delivery = () => {

  return (
    <div className="container">
        {/*<h2>Страница доставки</h2>*/}
      <SearchForm />
      <Info>
        <InfoDelivery />
      </Info>
      <Banner>
        <BannerStatistics/>
      </Banner>
      <Slider />
    </div>
  )
}

export default Delivery;