import React from 'react';
import {Banner, BannerStatistics, FeedbackForm, SearchForm, Slider} from "../components";
import {Info, InfoContacts} from "../components/Info";

const Contacts = () => {

  return (
    <div className="container">
      {/*<h2>Страница контакты и реквизиты</h2>*/}
      <SearchForm />
      <Info>
        <InfoContacts/>
      </Info>
      <Banner>
        <BannerStatistics/>
      </Banner>
      <FeedbackForm titleText="Обратная связь" />
      <Slider />
    </div>
  )
}

export default Contacts;