import React from 'react';
import './info.scss';
import backgroundDeliveryJpg from "../../assets/img/background/backgroundDelivery.jpg";
import backgroundApiSvg from '../../assets/img/background/backgroundApi.svg';

const InfoApi = () => {
  return (
    <div>
      <div className="info__wrapper">
        <img className="info__background" src={backgroundApiSvg} alt="Api"/>
        <div className="info__item">
          <h2 className="info__title">API</h2>
          <p className="info__text">
            По вопросам предоставления API ключа для интеграции с вашей внутренней системой поиска, а также для
            трансляции
            цен в ваш интернет ресурс просим связаться с нами по телефону&nbsp;
            <a className="info__link" href="tel:+78007001863">8-800-700-18-63</a>
            &nbsp;либо отправить заявку на адрес &nbsp;
            <a className="info__link" href="mailto:sales@getchips.ru" target="_blank">sales@getchips.ru</a>
            .
          </p>
          <p className="info__text">
            Для интеграции в вашу базу данных 1С рекомендуем использовать&nbsp;
            <a className="info__link" href="http://www.megabom1c.ru/" target="_blank">модуль от наших партнёров «Эталон
              Автоматизация»</a>
          </p>
          <p className="info__text">
            Чтобы подключить и грамотно настроить модуль,&nbsp;
            <a className="info__link" href="http://www.etalon-a.ru/digiokey/nastrojki_api_agregatorov.php"
               target="_blank">прочтите руководство пользователя</a>

          </p>
        </div>
      </div>
      <hr align="center" width="auto" size="1" color="#cccccc"/>
    </div>


  )
}

export default InfoApi;