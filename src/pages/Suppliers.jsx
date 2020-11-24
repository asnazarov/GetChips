import React from 'react';
import {Banner, BannerStatistics} from "../components";

const Suppliers = () => {

  return (
    <div className="container container--cart">
      <h2>Поставщики</h2>
      <Banner>
        <BannerStatistics/>
      </Banner>
    </div>
  )
}

export default Suppliers