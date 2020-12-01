import React from 'react';
import {ResultsBlock, SearchingResultContainer, SearchingResultHeader} from "../components/ResultsBlock";
import {SearchForm} from "../components";

const SearchingResults = () => {

  return (
    <div className="container">
      <SearchForm/>
      <ResultsBlock>
        <div className="res-header">
          <SearchingResultHeader/>
        </div>
        <table className="res-cont">
          <SearchingResultContainer/>
        </table>
      </ResultsBlock>
    </div>

  )
}

export default SearchingResults;