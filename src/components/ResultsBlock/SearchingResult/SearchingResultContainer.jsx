import React from 'react';
import '../resultsBlock.scss';
import {QuantityBtn} from "../../Buttons";

const SearchingResultContainer = () => {

  return (
    <tbody>
      <tr>
        <th className="res-cont__item-list res-cont__item-list_head">Поставщик</th>
        <th className="res-cont__item-list res-cont__item-list_head">Наименование</th>
        <th className="res-cont__item-list res-cont__item-list_head">Бренд</th>
        <th className="res-cont__item-list res-cont__item-list_head">Доступно</th>
        <th className="res-cont__item-list res-cont__item-list_head">Кратность</th>
        <th className="res-cont__item-list res-cont__item-list_head">min.</th>
        <th className="res-cont__item-list res-cont__item-list_head">В упаковке</th>
        <th className="res-cont__item-list res-cont__item-list_head">Цена <span>RUB</span></th>
        <th className="res-cont__item-list res-cont__item-list_head">Сумма</th>
        <th className="res-cont__item-list res-cont__item-list_head">Срок</th>
        <th className="res-cont__item-list res-cont__item-list_head">Кол-во</th>
      </tr>

      <tr className="res-cont__list">
        <td className="res-cont__item-list">Verical</td>
        <td className="res-cont__item-list">TPS54332DDAR<br/>(DC:1939)</td>
        <td className="res-cont__item-list">Texas Instruments</td>
        <td className="res-cont__item-list">1 575</td>
        <td className="res-cont__item-list">1</td>
        <td className="res-cont__item-list">1</td>
        <td className="res-cont__item-list">1</td>
        <td className="res-cont__item-list">
          <ul>
            <li>111,04</li>
            <li>100,57</li>
            <li>94,83</li>
            <li>76,71</li>
            <li>75,18</li>
          </ul>
        </td>
        <td className="res-cont__item-list">
          <ul>
            <li>x 1 = 111,04</li>
            <li>x10 = 1 005,70</li>
            <li>x25 = 2 370,64</li>
            <li>x100 = 7 671,28</li>
            <li>x250 = 18 794,59</li>
          </ul>
        </td>
        <td className="res-cont__item-list">12 раб. дней</td>
        <td className="res-cont__item-list">
          <QuantityBtn />
          <p className="res-cont__sum">22 208 RUB</p>
        </td>
      </tr>
      <tr className="res-cont__list">
        <td className="res-cont__item-list">Verical</td>
        <td className="res-cont__item-list">TPS54332DDAR<br/>(DC:1939)</td>
        <td className="res-cont__item-list">Texas Instruments</td>
        <td className="res-cont__item-list">1 575</td>
        <td className="res-cont__item-list">1</td>
        <td className="res-cont__item-list">1</td>
        <td className="res-cont__item-list">1</td>
        <td className="res-cont__item-list">
          <ul>
            <li>111,04</li>
            <li>100,57</li>
            <li>94,83</li>
            <li>76,71</li>
            <li>75,18</li>
          </ul>
        </td>
        <td className="res-cont__item-list">
          <ul>
            <li>x 1 = 111,04</li>
            <li>x10 = 1 005,70</li>
            <li>x25 = 2 370,64</li>
            <li>x100 = 7 671,28</li>
            <li>x250 = 18 794,59</li>
          </ul>
        </td>
        <td className="res-cont__item-list">12 раб. дней</td>
        <td className="res-cont__item-list">
          <QuantityBtn />
          <p className="res-cont__sum">22 208 RUB</p>
        </td>
      </tr>
      <tr className="res-cont__list">
        <td className="res-cont__item-list">Verical</td>
        <td className="res-cont__item-list">TPS54332DDAR<br/>(DC:1939)</td>
        <td className="res-cont__item-list">Texas Instruments</td>
        <td className="res-cont__item-list">1 575</td>
        <td className="res-cont__item-list">1</td>
        <td className="res-cont__item-list">1</td>
        <td className="res-cont__item-list">1</td>
        <td className="res-cont__item-list">
          <ul>
            <li>111,04</li>
            <li>100,57</li>
            <li>94,83</li>
            <li>76,71</li>
            <li>75,18</li>
          </ul>
        </td>
        <td className="res-cont__item-list">
          <ul>
            <li>x 1 = 111,04</li>
            <li>x10 = 1 005,70</li>
            <li>x25 = 2 370,64</li>
            <li>x100 = 7 671,28</li>
            <li>x250 = 18 794,59</li>
          </ul>
        </td>
        <td className="res-cont__item-list">12 раб. дней</td>
        <td className="res-cont__item-list ">
          <QuantityBtn />
          <p className="res-cont__sum">22 208 RUB</p>
        </td>
      </tr>
    </tbody>


  )
}

export default SearchingResultContainer;