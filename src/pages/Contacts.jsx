import React from 'react';
import {Banner, BannerStatistics} from "../components";

const Contacts = () => {

  return (
    <div className="container">
      <h2>Страница контакты и реквизиты</h2>
      <Banner>
        <BannerStatistics/>
      </Banner>
    </div>
  )
}

export default Contacts;