import React from 'react';
import './_menu.scss';
import {NavLink} from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__list-item">
          <NavLink to="/about" className="menu__link" activeClassName="menu__link_active">
            <p className="menu__text">О нас</p>
          </NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink to="/suppliers" className="menu__link" activeClassName="menu__link_active">
            <p className="menu__text">Поставщики</p>
          </NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink to="/delivery" className="menu__link" activeClassName="menu__link_active">
            <p className="menu__text">Доставка</p>
          </NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink to="/workingConditions" className="menu__link" activeClassName="menu__link_active">
            <p className="menu__text">Условия работы</p>
          </NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink to="/contacts" className="menu__link" activeClassName="menu__link_active">
            <p className="menu__text">Контакты и реквизиты</p>
          </NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink to="/api" className="menu__link" activeClassName="menu__link_active">
            <p className="menu__text">API</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;