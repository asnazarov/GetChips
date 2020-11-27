import React from 'react';
import {Banner, BannerStatistics, SearchForm, Slider} from "../components";

const Api = () => {

  return (
    <div className="container">
      {/*<h2>API</h2>*/}
      <SearchForm />
      <Banner>
        <BannerStatistics/>
      </Banner>
      <Slider />
    </div>
  )
}

export default Api;