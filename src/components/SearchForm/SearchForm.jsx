import React from 'react';
import classNames from 'classnames';
import './searchForm.scss';
import {Download, SearchBtn} from "../Buttons";
import {NavLink} from "react-router-dom";

const SearchForm = ({searchMain}) => {
  console.log(searchMain)
  // className={`search_item ${searchMain ? 'search_item--last': ''}`}
  return (
    <form className="search">
      <div className="search__item">
        <input className={classNames("search__input", {
          "search__input_main": !searchMain
        })}
               type="text" id="numberComponent"
               placeholder="Номер компонента"
        />
        {
          searchMain && (
            <label className="search__label" htmlFor="numberComponent">
              Например:&nbsp;
              <span className="search__label-text">max34</span>
            </label>
          )
        }
      </div>

      <div className={classNames("search__item", "search__item_last")}
           style={{
             width: searchMain && '130px'
           }}
      >

        <input className={classNames("search__input", {
          "search__input_main": !searchMain
        })} type="text" id="quantity"
               placeholder="Количество"/>
        {
          searchMain && (
            <label className={classNames("search__label", "search__label_stretch")} htmlFor="quantity">
              <span className="search__label-text">100</span>
              <span className="search__label-text">200</span>
              <span className="search__label-text">300</span>
              <span className="search__label-text">400</span>
            </label>
          )
        }
      </div>
      <NavLink to="/results" target="_blank">
        <SearchBtn searchMain={searchMain}/>
      </NavLink>
      {
        !searchMain && <Download/>
      }

    </form>
  )
}

export default SearchForm;