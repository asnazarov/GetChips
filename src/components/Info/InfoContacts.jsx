import React from 'react';
import './info.scss';
import backgroundContactsSvg from '../../assets/img/background/backgroundContacts.svg';

const InfoContacts = () => {

  return (
    <>
      <article className="info__wrapper">
        <img className="info__background" src={backgroundContactsSvg} alt="Contacts"/>
        <div className="info__item">
          <h2 className="info__title">Контакты и реквизиты</h2>
          <p className="info__text">
            Общество с ограниченной ответственностью «ГетЧипс» (ООО «ГетЧипс»)
          </p>
          <p className="info__text">
            ИНН 6658455625 КПП 667101001 ОГРН 1146658007352<br/>
            ОКПО 20874913 ОКАТО 65401364000 ОКВЭД 51.65.5; 51.65.6<br/>
            р/с 40702810700000007344 в ООО КБ «КОЛЬЦО УРАЛА»<br/>
            кор.сч. 30101810500000000768 БИК 046577768<br/>
          </p>
          <p className="info__text">
            Тел./факс:&nbsp;<a className="info__link" href="tel:+78007001863">8-800-700-18-63</a><br/>
            email: <a className="info__link" href="mailto:sales@getchips.ru" target="_blank" rel="noreferrer">sales@getchips.ru</a>
          </p>
        </div>
      </article>
      <hr align="center" width="auto" size="1" color="#cccccc"/>
    </>
  )
}

export default InfoContacts;