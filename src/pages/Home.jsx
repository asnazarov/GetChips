import React from 'react';
import {Banner, BannerServices, BannerStatistics, Cover, FeedbackForm, Slider} from "../components";

const Home = () => {

  return (
    <div className="container">
      <h2>Home</h2>
      <Cover/>
      <Banner>
        <BannerServices/>
      </Banner>
      <Banner>
        <BannerStatistics/>
      </Banner>
      <Slider />
      <FeedbackForm titleText="Обратная связь" />
    </div>
  )
}

export default Home;