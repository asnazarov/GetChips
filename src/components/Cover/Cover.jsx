import React, {useState} from 'react';
import './cover.scss';
import {PopupExcel, SearchForm} from "../index";


const Cover = () => {
  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => {
    setShowPopup(showPopup => !showPopup)
  }

  return (
    <section className="cover">
      <div className="cover__background"/>
      <div className="cover__item">
        <h2 className="cover__title">Getchips - автоматизированная система поиска и закупки электронных компонентов</h2>
        <SearchForm
          searchMain
        />
        <p className="cover__link" onClick={togglePopup}>Загрузить список компонетов</p>
      </div>
      <PopupExcel
        togglePopup={togglePopup}
        when={showPopup}
        showPopup={showPopup}
      />
    </section>
  )
}

export default Cover;