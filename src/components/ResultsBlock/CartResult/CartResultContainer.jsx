import React from 'react';
import '../resultsBlock.scss';
import {Delete} from "../../Buttons";

const CartResultContainer = () => {
return (
  <tbody>
  <tr>
    <th className="res-cont__item-list res-cont__item-list_head">Поставщик</th>
    <th className="res-cont__item-list res-cont__item-list_head">Наименование</th>
    <th className="res-cont__item-list res-cont__item-list_head">Бренд</th>
    <th className="res-cont__item-list res-cont__item-list_head">Кол-во</th>
    <th className="res-cont__item-list res-cont__item-list_head">В упаковке</th>
    <th className="res-cont__item-list res-cont__item-list_head">Цена за шт. RUB</th>
    <th className="res-cont__item-list res-cont__item-list_head">Сумма RUB</th>
    <th className="res-cont__item-list res-cont__item-list_head">Срок</th>
    <th className="res-cont__item-list res-cont__item-list_head"/>

  </tr>

  <tr className="res-cont__list">
    <td className="res-cont__item-list">Verical</td>
    <td className="res-cont__item-list">TPS54332DDAR<br/>(DC:1939)</td>
    <td className="res-cont__item-list">Texas Instruments</td>
    <td className="res-cont__item-list">
      <input type="text"/>
    </td>
    <td className="res-cont__item-list">1</td>
    <td className="res-cont__item-list">75,1784</td>
    <td className="res-cont__item-list">37 529,1840</td>
    <td className="res-cont__item-list">2-3 нед.</td>
    <td className="res-cont__item-list">
      <Delete hex="#333333"/>
    </td>

  </tr>
  </tbody>
)
}

export default CartResultContainer;