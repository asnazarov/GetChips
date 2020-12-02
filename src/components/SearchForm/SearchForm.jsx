import React, {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import './searchForm.scss';
import {DownloadExcelBtn, SearchBtn} from "../Buttons";
import {NavLink} from "react-router-dom";

const SearchForm = ({searchMain}) => {
  const [inputNumber, setInputNumber] = useState(false)
  const [inputQuantity, setInputQuantity] = useState(false)
  const [colorTextNumber, setColorTextNumber] = useState('#439B24')
  const [colorTextQuantity, setColorTextQuantity] = useState('#439B24')
  const inputNumberRef = useRef(null);
  const inputQuantityRef = useRef(null);

  const onClickInputNumber = () => {
    !inputNumber && setInputNumber(inputNumber => !inputNumber)
  }

  const onClickInputQuantity = () => {
    !inputQuantity && setInputQuantity(inputQuantity => !inputQuantity)
  }

  useEffect(() => {
    document.body.addEventListener('mousedown', handleOutsideClick)
  }, [])

  const handleOutsideClick = event => {    // клик вне области Input удаляет search__text
    const path = event.path || (event.composedPath && event.composedPath());
    // const findInput = path.some((item) => item === inputNumberRef.current)
    const findInputQuantity = path.some((item) => item === inputQuantityRef.current)
    const findInputNumber = path.some((item) => item === inputNumberRef.current);
    !findInputQuantity && inputQuantityRef.current?.value === "" && setInputQuantity(false)
    !findInputNumber && inputNumberRef.current?.value === "" && setInputNumber(false)
    setColorTextQuantity(!findInputQuantity ? "#969696" : "#439B24")
    setColorTextNumber(!findInputNumber ? "#969696" : "#439B24")
  }

  return (
    <form className="search">
      <div className="search__item">
        {
          searchMain && inputNumber && <p className="search__text"
                                          style={{
                                            color: colorTextNumber
                                          }}>Номер компонента</p>
        }
        <input className={classNames("search__input", {
          "search__input_main": !searchMain
        })}
               ref={inputNumberRef}
               onClick={onClickInputNumber}
               placeholder="Номер компонента"
        />
        {
          searchMain && (
            <p className="search__label">
              Например:&nbsp;
              <span className="search__label-text">max34</span>
            </p>
          )
        }
      </div>

      <div className={classNames("search__item", "search__item_last")}
           style={{
             width: searchMain && '130px'
           }}
      >
        {
          searchMain && inputQuantity && <p className="search__text"
                                            style={{
                                              color: colorTextQuantity
                                            }}
          >Количество</p>
        }
        <input className={classNames("search__input", {
          "search__input_main": !searchMain
        })}
               ref={inputQuantityRef}
               onClick={onClickInputQuantity}
               type="text"
               placeholder="Количество"/>
        {
          searchMain && (
            <p className={classNames("search__label", "search__label_stretch")}>
              <span className="search__label-text">100</span>
              <span className="search__label-text">200</span>
              <span className="search__label-text">300</span>
              <span className="search__label-text">400</span>
            </p>
          )
        }
      </div>
      <NavLink to="/results">
        <SearchBtn searchMain={searchMain}/>
      </NavLink>
      {
        !searchMain && <DownloadExcelBtn/>
      }

    </form>
  )
}

export default SearchForm;