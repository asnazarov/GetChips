import React from 'react';
import '../resultsBlock.scss';
import {PopupSort} from "../../index";

const SearchingResultHeader = () => {

  return (
    <>
      <h2 className="res-header__title">Результаты поиска</h2>
      <PopupSort/>
    </>
  )
}

export default SearchingResultHeader;