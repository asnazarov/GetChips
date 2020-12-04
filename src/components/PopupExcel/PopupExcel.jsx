import React from 'react';
import Fade from 'react-reveal/Fade';
import './popupExcel.scss';
import excelSvg from '../../assets/img/svg/excel.svg';
import {CloseBtn, SelectBtn} from "../Buttons";

const PopupExcel = ({togglePopup, showPopup}) => {

  return (
    <Fade when={showPopup}>

      <div className="popupExcel"
           style={showPopup ? {display: "block"} : {display: "none"}}
      >
        <Fade top>
          <div className="popupExcel__wrapper">
            <CloseBtn togglePopup={togglePopup}/>
            <img src={excelSvg} alt="Excel"/>
            <h2 className="popupExcel__title">Выберите или перетащите сюда Excel файл.</h2>
            <p className="popupExcel__text">
              Структура файла:<br/>
              Первый столбец - только партномер (без описания и характеристик),<br/>
              Второй столбец - необходимое количество<br/>
            </p>
            <SelectBtn text="Выбрать" />
          </div>
        </Fade>


      </div>
    </Fade>

  )
}

export default PopupExcel;