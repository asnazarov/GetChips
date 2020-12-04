import React from 'react';
import './popupCart.scss';
import {DeleteBtn, SelectBtn} from "../Buttons";

const PopupCart = () => {

  return (
    <div className="popup-cart">
      <div className="popup-cart__item">
        <p className="popup-cart__title">Позиций: 22</p>
        <p className="popup-cart__title">Итого: 999 999 ₽</p>
      </div>
      <hr align="center" width="auto" size="1" color="#cccccc"/>
      <div className="popup-cart__item">
        <p className="popup-cart__text popup-cart__text_name">TPS54332DDAR (DC:1939) TPS54332DDAR (DC:1939)</p>
        <p className="popup-cart__text popup-cart__text_num">х20 000 000</p>
        <p className="popup-cart__text popup-cart__text_num">99 999 999 ₽</p>
        <DeleteBtn width="17.6" height="17.6" hex="#969696" popupCart/>
      </div>
      <div className="popup-cart__item">
        <p className="popup-cart__text popup-cart__text_name">TPS54332</p>
        <p className="popup-cart__text popup-cart__text_num">х20 000</p>
        <p className="popup-cart__text popup-cart__text_num">9 ₽</p>
        <DeleteBtn width="17.6" height="17.6" hex="#969696" popupCart/>
      </div>
      <div className="popup-cart__item">
        <p className="popup-cart__text popup-cart__text_name">TPS54332 TPS5433223</p>
        <p className="popup-cart__text popup-cart__text_num">х20 000</p>
        <p className="popup-cart__text popup-cart__text_num">900 ₽</p>
        <DeleteBtn width="17.6" height="17.6" hex="#969696" popupCart/>
      </div>
      <div className="popup-cart__item popup-cart__item_btns">
        <SelectBtn text="Перейти в корзину"/>
        <SelectBtn text="Закрыть" popupCart/>

      </div>

    </div>
  )
}
export default PopupCart;