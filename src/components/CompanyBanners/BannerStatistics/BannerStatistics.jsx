import React from 'react';
import './bannerStatistics.scss';

const BannerStatistics = () => {

  return (
    <div className='bannerStatistics'>
      <div className="bannerStatistics__item">
        <h2 className='bannerStatistics__title'>25 000 000 $</h2>
        <p className="bannerStatistics__text">Оборот компании за 2019 год</p>
      </div>
      <div className="bannerStatistics__item">
        <h2 className='bannerStatistics__title'>800</h2>
        <p className="bannerStatistics__text">Количество клиентов</p>
      </div>
      <div className="bannerStatistics__item">
        <h2 className='bannerStatistics__title'>более 6000</h2>
        <p className="bannerStatistics__text">Наименований электронных компонентов</p>
      </div>
    </div>
  )
}

export default BannerStatistics;