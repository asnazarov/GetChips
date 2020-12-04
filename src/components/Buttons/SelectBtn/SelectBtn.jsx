import React from 'react';
import classNames from 'classnames';
import './selectBtn.scss';

const SelectBtn = ({text, popupCart}) => {
  return (
    <button className={classNames("select-btn", {
      "select-btn_popup-cart": popupCart
    })}>{text}</button>
  )
}
export default SelectBtn;