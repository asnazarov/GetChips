import React from 'react';
import {Banner, BannerServices, BannerStatistics, Cover} from "../components";

const Home = () => {

  return (
    <div className="container">
      {/*<h2>Home</h2>*/}
      <Cover/>
      <Banner>
        <BannerServices/>
      </Banner>
      <Banner>
        <BannerStatistics/>
      </Banner>
    </div>
  )
}

export default Home;