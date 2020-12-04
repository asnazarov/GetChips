import React, {useState} from 'react';
import './popupSort.scss';
import {KeyboardArrow} from "../Buttons";

const PopupSort = () => {
  const [visiblePopup, setVisiblePopup] = useState(false)

  const openPopup = () => {
    setVisiblePopup((setVisiblePopup) => !setVisiblePopup)
  }

  return (
    <div className="sort-popup">
      <div className="sort-popup__label"
           onClick={openPopup}
      >
        <p className="sort-popup__list-item">По умолчанию</p>
        <KeyboardArrow/>
      </div>
      {
        visiblePopup && (
          <ul className="sort-popup__list">
            <li className="sort-popup__list-item sort-popup__list-item_theme_green">Поставщик 1</li>
            <li className="sort-popup__list-item sort-popup__list-item_theme_green">Поставщик 2</li>
            <li className="sort-popup__list-item sort-popup__list-item_theme_green">Поставщик 3</li>
            <li className="sort-popup__list-item sort-popup__list-item_theme_green">Поставщик 4</li>
          </ul>
        )
      }

    </div>
  )
}

export default PopupSort;