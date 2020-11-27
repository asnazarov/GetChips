import React from 'react';
import './cover.scss';
import {SearchForm} from "../index";


const Cover = () => {

  return (
    <section className="cover">
      <div className="cover__background"/>
      <div className="cover__item">
        <h2 className="cover__title">Getchips - автоматизированная система поиска и закупки электронных компонентов</h2>
        <SearchForm
          searchMain
        />
        <p className="cover__link">Загрузить список компонетов</p>
      </div>
    </section>
  )
}

export default Cover;