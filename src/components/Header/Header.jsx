import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {CartBtn, LogoHeader, MenuBurgerBtn, PersonalAccBtn, PhoneBtn} from "../Buttons";
import './_header.scss';
import {Menu, PopupCart} from "../index";

const Header = () => {
  const [coverPlace1220, setCoverPlace1220] = useState(true)
  const [coverPlace999, setCoverPlace999] = useState(true)

  useEffect(() => {
    const updateView = () => {
      setCoverPlace1220(window.matchMedia("(min-width: 1220px)").matches);
      setCoverPlace999(window.matchMedia("(min-width: 999px)").matches);
    };
    window.addEventListener('resize', updateView);
    updateView();
    return () => window.removeEventListener('resize', updateView);
  }, []);

  return (
    <div className="header">
      <div className="header__container">
        <Link className="logo" to="/GetChips">
          <LogoHeader/>
        </Link>
        <div className="header__phone">
          <PhoneBtn/>
        </div>
        {
          coverPlace999 && <Menu/>
        }

        <div className="header__item">
          <Link className="personalAcc" to="/personalAccount">
            <PersonalAccBtn coverPlace1220={coverPlace1220}/>
          </Link>
          <Link className="cart" to="/cart">
            <CartBtn hex="#969696"/>
          </Link>
          {/*<PopupCart/>*/}
          {
            !coverPlace999 && <MenuBurgerBtn/>
          }
        </div>

      </div>
    </div>
  )
}

export default Header