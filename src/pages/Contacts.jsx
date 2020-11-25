import React from 'react';
import {Banner, BannerStatistics, FeedbackForm, Slider} from "../components";

const Contacts = () => {

  return (
    <div className="container">
      <h2>Страница контакты и реквизиты</h2>
      <Banner>
        <BannerStatistics/>
      </Banner>
      <FeedbackForm titleText="Обратная связь" />
      <Slider />
    </div>
  )
}

export default Contacts;