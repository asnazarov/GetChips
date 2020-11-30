import React from 'react';
import {ResultsBlock, SearchingResultContainer, SearchingResultHeader} from "../components/ResultsBlock";

const SearchingResults = () => {

  return (
    <div className="container">
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