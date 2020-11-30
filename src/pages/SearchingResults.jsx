import React from 'react';
import {ResultsBlock, SearchingResultContainer, SearchingResultHeader} from "../components/ResultsBlock";

const SearchingResults = () => {

  return (
    <div className="container">
      <ResultsBlock>
        <div className="results-header">
          <SearchingResultHeader/>
        </div>
        <div className="result-container">
          <SearchingResultContainer/>
        </div>
      </ResultsBlock>
    </div>

  )
}

export default SearchingResults;