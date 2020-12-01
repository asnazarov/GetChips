import React from 'react';
import '../resultsBlock.scss';
import {Delete, DownloadArrowBtn} from "../../Buttons";

const CartResultHeader = () => {

  return (
    <>
      <div className="res-header__wrapper">
        <DownloadArrowBtn/>
        <h2 className="res-header__title">Корзина</h2>
        <p className="res-header__text">Есть товар, который подлежит сертификации.
        <a href="#">Пожалуйста, обратитесь к вашему менеджеру</a>.
        </p>
      </div>
      <div className="res-header__wrapper">
        <Delete hex="#CA3838"/>
        <div className="res-header__orderBtn">Оформить заказ на 11 234 973 ₽</div>
      </div>
    </>
  )
}

export default CartResultHeader;