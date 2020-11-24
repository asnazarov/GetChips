import React from 'react';
import classNames from 'classnames';
import './searchForm.scss';
import {SearchBtn} from "../Buttons";

const SearchForm = () => {

  return (
    <form className="search">
      <div className="search__item">
        <input className="search__input" type="text" id="numberComponent" placeholder="Номер компонента"/>

        <label className="search__label" htmlFor="numberComponent">
          Например:&nbsp;
          <span className="search__label-text">max34</span>
        </label>
      </div>
      <div className="search__item">
        <input className="search__input" type="text" id="quantity" placeholder="Количество"/>
        <label className={classNames("search__label", "search__label_stretch")} htmlFor="quantity">
          <span className="search__label-text">100</span>
          <span className="search__label-text">200</span>
          <span className="search__label-text">300</span>
          <span className="search__label-text">400</span>
        </label>
      </div>
      <SearchBtn/>
    </form>
  )
}

export default SearchForm;