import React from 'react';
import {Link} from "react-router-dom";
import {Cart, LogoHeader, PersonalAcc, Phone} from "../Buttons";
import './_header.scss';
import {Menu} from "../index";

const Header = () => {

  return (
    <div className="header">
      <div className="header__container">
        <Link className="logo" to="/GetChips">
          <LogoHeader />
        </Link>
        <div className="header__phone">
          <Phone />
        </div>
        <Menu/>
        <div className="header__item">
          <Link className="personalAcc" to="/personalAccount">
            <PersonalAcc/>
          </Link>
          <Link className="cart" to="/cart">
            <Cart/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header