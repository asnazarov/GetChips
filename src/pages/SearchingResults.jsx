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
        <div className="res">
          <table className="res-cont">
            <SearchingResultContainer/>
          </table>
        </div>
      </ResultsBlock>
    </div>

  )
}

export default SearchingResults;