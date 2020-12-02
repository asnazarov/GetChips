import React from 'react';
import './quantityAddInput.scss';
import {CartBtn} from "../../Buttons";

const QuantityAddInput = () => {

  return (
    <div className="quantity-add">
      <input className="quantity-add__input" type="text"/>
      <button className="quantity-add__btn">
        <CartBtn hex="#ffffff" height="13" width="13"/>
      </button>
    </div>
  )
}

export default QuantityAddInput;