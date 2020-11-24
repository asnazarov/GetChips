import React from 'react';
import './cover.scss';
import backgroundJpg from '../../assets/img/background/background1.jpg';
import classNames from 'classnames';
import {SearchForm} from "../index";


const Cover = () => {

  return (
    <section className="cover">
      <img className={classNames("cover__background shadow")} src={backgroundJpg} alt="фон"/>
      <div className="cover__item">
        <h2 className="cover__title">Getchips - автоматизированная система поиска и закупки электронных компонентов</h2>
        <SearchForm />
        <p className="cover__link">Загрузить список компонетов</p>
      </div>
    </section>
  )
}

export default Cover;