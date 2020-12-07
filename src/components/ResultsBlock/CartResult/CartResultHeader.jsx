import React from 'react';
import '../resultsBlock.scss';
import {DeleteBtn, DownloadArrowBtn, SelectBtn} from "../../Buttons";
import {NavLink} from "react-router-dom";

const CartResultHeader = () => {

  return (
    <>
      <div className="res-header__wrapper">
        <DownloadArrowBtn/>
        <h2 className="res-header__title">Корзина</h2>
        <p className="res-header__text">Есть товар, который подлежит сертификации.
          Пожалуйста,
          <NavLink to="/personalAccount" className="res-header__link res-header__link_theme_green">
            обратитесь к вашему менеджеру
          </NavLink>
        </p>.
      </div>
      <div className="res-header__wrapper">
        <DeleteBtn hex="#CA3838"/>
        <SelectBtn text="Оформить заказ на 11 234 973 ₽"/>
      </div>
    </>
  )
}

export default CartResultHeader;