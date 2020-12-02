import React from 'react';
import './info.scss';
import backgroundApiSvg from '../../assets/img/background/backgroundApi.svg';

const InfoApi = () => {
  return (
    <>
      <article className="info__wrapper">
        <img className="info__background" src={backgroundApiSvg} alt="Api"/>
        <div className="info__item">
          <h2 className="info__title">API</h2>
          <p className="info__text">
            По вопросам предоставления API ключа для интеграции с вашей внутренней системой поиска, а также для
            трансляции
            цен в ваш интернет ресурс просим связаться с нами по телефону&nbsp;
            <a className="info__link info__link_theme_green" href="tel:+78007001863">8-800-700-18-63</a>
            &nbsp;либо отправить заявку на адрес &nbsp;
            <a className="info__link info__link_theme_green" href="mailto:sales@getchips.ru"
               target="_blank"
               rel="noreferrer"
            >sales@getchips.ru</a>
            .
          </p>
          <p className="info__text">
            Для интеграции в вашу базу данных 1С рекомендуем использовать&nbsp;
            <a className="info__link info__link_theme_green" href="http://www.megabom1c.ru/" target="_blank"
               rel="noreferrer">модуль от
              наших партнёров «Эталон
              Автоматизация»</a>
          </p>
          <p className="info__text">
            Чтобы подключить и грамотно настроить модуль,&nbsp;
            <a className="info__link info__link_theme_green"
               href="http://www.etalon-a.ru/digiokey/nastrojki_api_agregatorov.php"
               target="_blank"
               rel="noreferrer"
            >прочтите руководство пользователя</a>
          </p>
        </div>
      </article>
      <hr align="center" width="auto" size="1" color="#cccccc"/>
    </>
  )
}

export default InfoApi;