import React from 'react';
import './quantityBtn.scss';
import {CartBtn} from "../index";

const QuantityBtn = () => {

  return (
    <div className="quantity">
      <input className="quantity__input" type="text"/>
      <button className="quantity__btn">
        <CartBtn hex="#ffffff" height="13" width="13"/>
      </button>
    </div>
  )
}

export default QuantityBtn;