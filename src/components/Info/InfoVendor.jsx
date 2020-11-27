import React from 'react';
import './info.scss';

const InfoVendor = () => {

  return (
    <div className="info__wrapper">
      <div className="info__background"/>
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
        <a className="info__link" href="http://arvisgroup.ru/">http://arvisgroup.ru/</a>
      </div>
    </div>
  )
}
export default InfoVendor;