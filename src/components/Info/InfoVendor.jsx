import React from 'react';
import './info.scss';
import {
  eightJpg,
  elevenJpg, fifteenJpg,
  fiveJpg,
  fourJpg, fourTeenJpg,
  nineJpg,
  oneJpg,
  sevenJpg,
  sixJpg,
  tenJpg, thirteenJpg,
  threeJpg, twelveJpg,
  twoJpg
} from "../index";

const InfoVendor = () => {

  return (
    <div className="info__wrapper">
      <div className="info__background info__background_grid">
        <img className="info__company-logo" src={oneJpg} alt="slide 1"/>
        <img className="info__company-logo" src={twoJpg} alt="slide 2"/>
        <img className="info__company-logo" src={threeJpg} alt=""/>
        <img className="info__company-logo" src={fourJpg} alt=""/>
        <img className="info__company-logo" src={fiveJpg} alt=""/>
        <img className="info__company-logo" src={sixJpg} alt=""/>
        <img className="info__company-logo" src={sevenJpg} alt=""/>
        <img className="info__company-logo" src={eightJpg} alt=""/>
        <img className="info__company-logo" src={nineJpg} alt=""/>
        <img className="info__company-logo" src={tenJpg} alt=""/>
        <img className="info__company-logo" src={elevenJpg} alt=""/>
        <img className="info__company-logo" src={twelveJpg} alt=""/>
        <img className="info__company-logo" src={thirteenJpg} alt=""/>
        <img className="info__company-logo" src={fourTeenJpg} alt=""/>
        <img className="info__company-logo" src={fifteenJpg} alt=""/>
      </div>
      <div className="info__item">
        <h2 className="info__title">Поставщики</h2>
        <p className="info__text">
          Арвис Групп с 2008 года активно развивалась по модели логистической дистрибьюции и по настоящее время является
          надежным региональным партнером глобальных дистрибьюторов Arrow Electronics, Avnet Electronics, Digi-key
          Electronics, Mouser Electronics, Future Electronics, Rutronik, TTI Inc.).<br/>
          С 2014 года компания расширила штат инженеров и занялась проектными продажами.<br/>
          В линейке поставок представлена продукция следующих производителей: Silicon Power, KaiFeng Electronics,
          Innovative Sensor Technology, Transco, CviLux, Pairui Group, Taitien, Faithfullink, EWT Battery, WiseChip,
          Onpow, Meishuo Electric, AiT, Refond, FDK, Espressif Systems.<br/>
          Общая численность сотрудников около 100 человек. Оборот группы по результатам 2019 года превысил 25 миллионов
          долларов США.<br/>
        </p>
        <a className="info__link info__link_theme_green" href="http://arvisgroup.ru/">http://arvisgroup.ru/</a>
      </div>
    </div>
  )
}
export default InfoVendor;