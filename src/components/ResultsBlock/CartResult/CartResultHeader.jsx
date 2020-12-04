import React from 'react';
import '../resultsBlock.scss';
import {DeleteBtn, DownloadArrowBtn, SelectBtn} from "../../Buttons";

const CartResultHeader = () => {

  return (
    <>
      <div className="res-header__wrapper">
        <DownloadArrowBtn/>
        <h2 className="res-header__title">Корзина</h2>
        <p className="res-header__text">Есть товар, который подлежит сертификации.
        <p>Пожалуйста, обратитесь к вашему менеджеру</p>.
        </p>
      </div>
      <div className="res-header__wrapper">
        <DeleteBtn hex="#CA3838"/>
        <SelectBtn text="Оформить заказ на 11 234 973 ₽" />
      </div>
    </>
  )
}

export default CartResultHeader;