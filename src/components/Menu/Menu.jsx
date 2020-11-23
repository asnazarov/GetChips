import React from 'react';
import './_menu.scss';
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__link">
          <Link to="/about">
            <p className="menu__text">О нас</p>
          </Link>
        </li>
        <li className="menu__link">
          <Link to="/suppliers">
            <p className="menu__text">Поставщики</p>
          </Link>
        </li>
        <li className="menu__link">
          <Link to="/delivery">
            <p className="menu__text">Доставка</p>
          </Link>
        </li>
        <li className="menu__link">
          <Link to="/workingConditions">
            <p className="menu__text">Условия работы</p>

          </Link>
        </li>
        <li className="menu__link">
          <Link to="/contacts">
            <p className="menu__text">Контакты и реквизиты</p>
          </Link>
        </li>
        <li className="menu__link">
          <Link to="/api">
            <p className="menu__text">API</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;