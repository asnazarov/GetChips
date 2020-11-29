import React from 'react';
import {Banner, BannerStatistics, SearchForm, Slider} from "../components";
import {Info} from "../components/Info";
import InfoApi from "../components/Info/InfoApi";

const Api = () => {

  return (
    <div className="container">
      {/*<h2>API</h2>*/}
      <SearchForm />
      <Info>
        <InfoApi />
      </Info>
      <Banner>
        <BannerStatistics/>
      </Banner>
      <Slider />
    </div>
  )
}

export default Api;