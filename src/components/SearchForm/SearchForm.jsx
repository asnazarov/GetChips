import React, {useEffect, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import classNames from 'classnames';
import './searchForm.scss';
import {DownloadExcelBtn, SearchBtn} from "../Buttons";
import {inputsValue} from "../../redux/actions/search";


const SearchForm = ({searchMain}) => {
  const choiceComponent = ["max34"]
  const choiceQuantity = ["100", "200", "300", "400"]

  const dispatch = useDispatch()
  const [navLinkSearch, setNavLinkSearch] = useState(false)
  const [visibleTextComponent, setVisibleTextComponent] = useState(false)
  const [visibleTextQuantity, setVisibleTextQuantity] = useState(false)
  const [componentError, setComponentError] = useState(false)
  const [quantityError, setQuantityError] = useState(false)
  const [colorTextComponent, setColorTextComponent] = useState('#439B24')
  const [colorTextQuantity, setColorTextQuantity] = useState('#439B24')
  const inputComponentRef = useRef(null);
  const inputQuantityRef = useRef(null);

  const onClickInputComponent = () => {
    !visibleTextComponent && setVisibleTextComponent(visibleTextComponent => !visibleTextComponent)
  }

  const onClickInputQuantity = () => {
    !visibleTextQuantity && setVisibleTextQuantity(visibleTextQuantity => !visibleTextQuantity)
  }
  const onChangeInputComponent = () => {
    inputComponentRef.current?.value !== "" && inputQuantityRef.current?.value !== "" && setNavLinkSearch(true)
    inputComponentRef.current?.value === "" && setNavLinkSearch(false)
    setComponentError(false)
  }

  const onChangeInputQuantity = () => {
    inputComponentRef.current?.value !== "" && inputQuantityRef.current?.value !== "" && setNavLinkSearch(true)
    inputQuantityRef.current?.value === "" && setNavLinkSearch(false)
    setQuantityError(false)
  }

  useEffect(() => {
    document.body.addEventListener('mousedown', handleOutsideClick)
  }, [])

  const handleOutsideClick = event => {    // клик вне области Input удаляет search__text
    const path = event.path || (event.composedPath && event.composedPath());
    const findInputQuantity = path.some((item) => item === inputQuantityRef.current)
    const findInputNumber = path.some((item) => item === inputComponentRef.current);
    !findInputQuantity && inputQuantityRef.current?.value === "" && setVisibleTextQuantity(false)
    !findInputNumber && inputComponentRef.current?.value === "" && setVisibleTextComponent(false)
    setColorTextQuantity(!findInputQuantity ? "#969696" : "#439B24")
    setColorTextComponent(!findInputNumber ? "#969696" : "#439B24")
  }

  const searchCriteria = () => {
    inputComponentRef.current.value === "" && setComponentError(true)
    inputQuantityRef.current.value === "" && setQuantityError(true)
    dispatch(inputsValue({
      num: inputComponentRef.current.value,
      quan: inputQuantityRef.current.value
    }))
  }
  const handleComponent = (component) => {
    inputComponentRef.current.value = component
    onClickInputComponent()
    onChangeInputComponent()
  }

  const handleQuantity = (num) => {
    inputQuantityRef.current.value = num;
    onClickInputQuantity()
    onChangeInputQuantity()
  }

  return (
    <form className="search">
      <div className="search__item">
        {
          searchMain && visibleTextComponent && <p className="search__text"
                                                   style={{
                                                     color: colorTextComponent
                                                   }}>Номер компонента</p>
        }
        <input className={classNames("search__input", {
          "search__input_main": !searchMain,
          "search__input_error": componentError
        })}
               ref={inputComponentRef}
               onClick={onClickInputComponent}
               onChange={onChangeInputComponent}
               placeholder="Номер компонента"
        />
        {
          searchMain && (
            <p className="search__label">
              Например:&nbsp;
              {choiceComponent.map((item, index) => <span className="search__label-text"
                                                          onClick={() => handleComponent(item)}
                                                          key={index}>{item}</span>)}
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
          searchMain && visibleTextQuantity && <p className="search__text"
                                                  style={{
                                                    color: colorTextQuantity
                                                  }}
          >Количество</p>
        }
        <input className={classNames("search__input", {
          "search__input_main": !searchMain,
          "search__input_error": quantityError
        })}
               ref={inputQuantityRef}
               onClick={onClickInputQuantity}
               onChange={onChangeInputQuantity}
               type="number"
               placeholder="Количество"/>
        {
          searchMain && (
            <p className={classNames("search__label", "search__label_stretch")}>
              {
                choiceQuantity.map((item, index) => (
                  <span className="search__label-text"
                        onClick={() => handleQuantity(item)}
                        key={index}
                  >{item}</span>
                ))
              }
            </p>
          )
        }
      </div>
      {
        navLinkSearch ? (
          <NavLink to="/results">
            <SearchBtn
              searchCriteria={searchCriteria}
              searchMain={searchMain}
              componentError={componentError}
            />
          </NavLink>
        ) : (
          <SearchBtn
            searchCriteria={searchCriteria}
            searchMain={searchMain}
            componentError={componentError}
          />
        )
      }

      {
        !searchMain && <DownloadExcelBtn/>
      }
    </form>
  )
}

export default SearchForm;

