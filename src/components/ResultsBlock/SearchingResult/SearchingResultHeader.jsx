import React from 'react';
import '../resultsBlock.scss';
import {SortPopup} from "../../index";

const SearchingResultHeader = () => {

  return (
    <>
      <h2 className="results-header__title">Результаты поиска</h2>
      <SortPopup/>
    </>
  )
}

export default SearchingResultHeader;