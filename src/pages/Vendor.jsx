import React from 'react';
import {Banner, BannerStatistics, SearchForm} from "../components";
import {Info, InfoVendor} from "../components/Info";

const Vendor = () => {

  return (
    <div className="container container--cart">
      {/*<h2>Поставщики</h2>*/}
      <SearchForm />
      <Info>
        <InfoVendor />
      </Info>
      <Banner>
        <BannerStatistics/>
      </Banner>
    </div>
  )
}

export default Vendor