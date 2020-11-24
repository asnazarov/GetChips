import React from 'react';
import {Link} from "react-router-dom";
import './footer.scss';
import {LogoFooter} from "../Buttons";


const Footer = () => {

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__item">
          <Link className="logo" to="/GetChips">
            <LogoFooter/>
          </Link>
          <div className="footer__wrapperText">
            <p className="footer__text">ИНН 6658455625</p>
            <p className="footer__text">КПП 667101001</p>
            <p className="footer__text">ОГРН 1146658007352</p>
          </div>
        </div>
        <div className="footer__item">
          <div className="footer__wrapperText">
            <p className="footer__text">Екатеринбург: 620014, ул. Хохрякова, 74 (БЦ Кристал), офис 1102</p>
            <p className="footer__text">Москва: 121069, Багратионовский проезд, 7 корпус 20В (БЦ Конвент-Плюс), офис
              729</p>
            <p className="footer__text">Санкт-Петербург: 195220, пр. Непокорённых 49 (БЦ Н-49), офис 415</p>
          </div>
        </div>
        <div className="footer__item">
          <div className="footer__wrapperText">
            <a className="phone" href="tel:+79991234567">
              <p className="footer__text">Тел./факс: 8-800-700-18-63</p>
            </a>
            <p className="footer__text">email: sales@getchips.ru</p>
            <p className="footer__text">2021 &#169; Getchips</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer;