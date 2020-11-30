import React from 'react';
import './resultsBlock.scss';

const ResultsBlock = ({children}) => {

  return (
    <section className="results">
      {children}
    </section>
  )
}
export default ResultsBlock;