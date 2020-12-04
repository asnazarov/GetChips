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
  }

  const handleQuantity = (num) => {
    inputQuantityRef.current.value = num;
    onClickInputQuantity()
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
                                                 onClick={() => handleComponent(item)} key={index}>{item}</span>)}
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

// import React, {useEffect, useRef, useState} from 'react';
// import classNames from 'classnames';
// import './searchForm.scss';
// import {DownloadExcelBtn, SearchBtn} from "../Buttons";
// import {NavLink} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// import {findInputNumberF, inputNumberF, inputQuantityF} from "../../redux/actions/searchInput";
//
// const SearchForm = ({searchMain}) => {
//   const dispatch = useDispatch()
//   const searchInput = useSelector(({searchInput}) => searchInput)
//
//   const green = '#439B24'
//   const [inputEvent, setInputevent] = useState(null)
//   const [inputQuantity, setInputQuantity] = useState(false)
//   // const [colorTextNumber, setColorTextNumber] = useState('#439B24')
//   // const [colorTextQuantity, setColorTextQuantity] = useState('#439B24')
//   const inputNumberRef = useRef(null);
//   const inputQuantityRef = useRef(null);
//
//   // const [inputNumberrrr, setInputNumberrrr] = useState(
//   //   {
//   //     focus: false,
//   //     color: '#439B24',
//   //     a: useRef(null)
//   //   })
//   const onClickInputNumber = () => {
//     dispatch(inputNumberF(true, green, inputNumberRef, searchInput.valueNumber))
//     // !inputNumber && setInputNumber(inputNumber => !inputNumber) // *
//     // !inputNumberrrr.focus && setInputNumberrrr(inputNumberrrr => ({
//     //   ...inputNumberrrr,
//     //   focus: !inputNumberrrr.focus
//     // }))
//   }
//   // console.log(inputNumberrrr)
// const onChageInputNumber = (e) => {
//     // console.log(e.target.value)
//   dispatch(inputNumberF(true, green, inputNumberRef, e.target.value))
// }
//   const onClickInputQuantity = () => {
//     dispatch(inputQuantityF(true))
//     !inputQuantity && setInputQuantity(inputQuantity => !inputQuantity)
//   }
//
//   useEffect(() => {
//     document.body.addEventListener('mousedown', handleOutsideClick)
//
//   }, [])
//
//   useEffect(() => {
//     changeVisibilityText()
//   }, [searchInput])
//   const handleOutsideClick = event => {
//     const path = event?.path || (event?.composedPath && event?.composedPath());
//     // const findInputNumber = path?.some((item) => item === searchInput?.refNumber);
//     // setInputevent(path)
//     dispatch(findInputNumberF(path))
//     // console.log(path)
//     // const findInputQuantity = path?.some((item) => item === inputQuantityRef.current)
//     // // const findInputNumber = path.some((item) => item === inputNumberRef.current); // *
//     // const findInputNumber = path?.some((item) => item === searchInput.refNumber?.current);
//     // console.log(searchInput)
//     // console.log(path)
//     // !findInputQuantity && inputQuantityRef.current?.value === "" && setInputQuantity(false)
//     // // !findInputNumber && inputNumberRef.current?.value === "" && setInputNumber(false) // *
//     // !findInputNumber && searchInput.refNumber?.current?.value === "" && dispatch(inputNumberF(true))
//     // setColorTextQuantity(!findInputQuantity ? "#969696" : "#439B24")
//     // setColorTextNumber(!findInputNumber ? "#969696" : "#439B24")
//   }
//
//   const changeVisibilityText = () => {
//     // const findInputQuantity = path?.some((item) => item === inputQuantityRef.current)
//     // const findInputNumber = path.some((item) => item === inputNumberRef.current); // *
//     // const findInputNumber = inputEvent?.some((item) => item === searchInput?.refNumber);
//     const findInputNumber = searchInput.findInputNumber?.some((item) => item === searchInput?.refNumber);
//
//     // console.log(findInputNumber)
//     // !findInputQuantity && inputQuantityRef.current?.value === "" && setInputQuantity(false)
//     // // !findInputNumber && inputNumberRef.current?.value === "" && setInputNumber(false) // *
//
//     // console.log(searchInput.valueNumber)
//     !findInputNumber && searchInput.refNumber?.value === "" && dispatch(inputNumberF(false, "#969696"))
//     !findInputNumber && searchInput.valueNumber !== "" && dispatch(inputNumberF(true, "#969696"))
//     // console.log(searchInput.valueNumber)
//     // const focusNumber = !findInputNumber && searchInput.refNumber?.value === ""
//     // const colorNumber = !findInputNumber ? "#969696" : "#439B24";
//     // console.log(searchInput.refNumber?.value !== "")
//     // dispatch(inputNumberF(focusNumber, colorNumber))
//     // setColorTextQuantity(!findInputQuantity ? "#969696" : "#439B24")
//     // setColorTextNumber(!findInputNumber ? "#969696" : "#439B24")
//     // !findInputNumber && searchInput.valueNumber !== "" && dispatch(inputNumberF(null, "#969696"))
//   }
// const aaa = () => {
//   // dispatch(inputNumberF(true, "#969696", inputNumberRef, searchInput.valueNumber))
//   console.log(searchInput.valueNumber)
//
// }
//   return (
//     <form className="search">
//       <div className="search__item">
//         {
//           searchMain && searchInput.focusNumber && <p className="search__text"
//                                                       style={{
//                                                         color: searchInput.colorNumber
//                                                       }}>Номер компонента</p>
//         }
//         <input className={classNames("search__input", {
//           "search__input_main": !searchMain
//         })}
//                ref={inputNumberRef}
//                onClick={onClickInputNumber}
//                onChange={e => onChageInputNumber(e)}
//                placeholder="Номер компонента"
//         />
//         {
//           searchMain && (
//             <p className="search__label">
//               Например:&nbsp;
//               <span className="search__label-text">max34</span>
//             </p>
//           )
//         }
//       </div>
//
//       <div className={classNames("search__item", "search__item_last")}
//            style={{
//              width: searchMain && '130px'
//            }}
//       >
//         {
//           searchMain && inputQuantity && <p className="search__text"
//             // style={{
//             //   color: colorTextQuantity
//             // }}
//           >Количество</p>
//         }
//         <input className={classNames("search__input", {
//           "search__input_main": !searchMain
//         })}
//                ref={inputQuantityRef}
//                onClick={onClickInputQuantity}
//                type="text"
//                placeholder="Количество"/>
//         {
//           searchMain && (
//             <p className={classNames("search__label", "search__label_stretch")}>
//               <span className="search__label-text">100</span>
//               <span className="search__label-text">200</span>
//               <span className="search__label-text">300</span>
//               <span className="search__label-text">400</span>
//             </p>
//           )
//         }
//       </div>
//       <NavLink to="/results">
//         <SearchBtn searchMain={searchMain}/>
//       </NavLink>
//       {
//         !searchMain && <DownloadExcelBtn/>
//       }
// <p onClick={aaa}>111111111111111</p>
//     </form>
//   )
// }
//
// export default SearchForm;