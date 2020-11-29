import React from 'react'
import './info.scss';
import backgroundDeliveryJpg from '../../assets/img/background/backgroundDelivery.jpg';

const InfoDelivery = () => {
  return (
    <div className="info__wrapper">
      <img className="info__background"  src={backgroundDeliveryJpg} alt="Доставка"/>
      <div className="info__item">
        <h2 className="info__title">Доставка</h2>
        <p className="info__text">
          Мы рады предложить Вам следующие варианты доставки товара:
        </p>
        <h3 className="info__subtitle">&#8212; Самовывоз товара собственной транспортной компанией</h3>
        <p className="info__text">
          Получение товара в офисе в Екатеринбурге. График работы офиса с 9.00 до 18.00. Дополнительные сборы за
          доставку при самовывозе не взымаются.
        </p>
        <h3 className="info__subtitle">&#8212; DHL</h3>
        <p className="info__text">
          DHL является частью Deutsche Post DHL Group - мирового лидера в области почтовых и логистических услуг.<br/>
          <span>Доставка клиентам в Москву и Санкт-Петербург за 1-2 дня.</span>
        </p>
        <h3 className="info__subtitle">&#8212; Курьерская служба КурьерСервисЭкспресс</h3>
        <p className="info__text">
          Компания КурьерСервисЭкспресс начала свою деятельность на рынке курьерских услуг в 1997 году. Собственная
          филиальная сеть КурьерСервисЭкспресс в России включает 100 филиалов и более 150 представительств.<br/>
          <span>Доставка клиентам в Москву за 2-3 дня.</span>
        </p>
      </div>
    </div>
  )
}
export default InfoDelivery;