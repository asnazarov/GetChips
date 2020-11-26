import React from 'react';
import './bannerServices.scss';
import {comparisonSvg, deliverySvg, filesSvg, loaderSvg, searcherSvg, transportSvg} from "./index";


const BannerServices = () => {

  return (
    <div className="bannerServices">

      <div className="bannerServices__column">
        <div className="bannerServices__item">
          <img src={searcherSvg} alt="Поисковик"/>
          <p className="bannerServices__text">Одновременный поиск <br/> по 100 позициям</p>
        </div>
        <div className="bannerServices__item">
          <img src={deliverySvg} alt="Доставка"/>
          <p className="bannerServices__text">Онлайн отслеживание <br/> движения груза</p>
        </div>
      </div>

      <div className="bannerServices__column">
        <div className="bannerServices__item">
          <img src={transportSvg} alt="Транспорт"/>
          <p className="bannerServices__text">Мы удовлетворяем потребности <br/> оптовой и розничной закупки</p>
        </div>
        <div className="bannerServices__item">
          <img src={filesSvg} alt="Отчетность"/>
          <p className="bannerServices__text">Счета формируются автоматически <br/> и выставляются в рублях с НДС</p>
        </div>
      </div>

      <div className="bannerServices__column">
        <div className="bannerServices__item">
          <img src={comparisonSvg} alt="Сравнение"/>
          <p className="bannerServices__text">Сравнение цен <br/> с мировых складов</p>
        </div>
        <div className="bannerServices__item">
          <img src={loaderSvg} alt="Отгрузка"/>
          <p className="bannerServices__text">Ежедневная отгрузка <br/> более 6000 линий в месяц</p>
        </div>
      </div>

    </div>
  )
}

export default BannerServices;