import React from 'react';
import '../resultsBlock.scss';
import {DeleteBtn, DownloadArrowBtn} from "../../Buttons";

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
        <DeleteBtn hex="#CA3838"/>
        <button className="res-header__orderBtn">Оформить заказ на 11 234 973 ₽</button>
      </div>
    </>
  )
}

export default CartResultHeader;