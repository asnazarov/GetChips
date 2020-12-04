import React from 'react';
import {ResultsBlock, SearchForm} from "../components";
import {
  CartResultContainer,
  CartResultHeader,
} from "../components/ResultsBlock";

const Cart = () => {

  return (
    <div className="container">
      {/*<h2>Страница корзины</h2>*/}
      <SearchForm/>

      <ResultsBlock>
        <div className="res-header">
          <CartResultHeader/>
        </div>
        <div className="res">
          <table className="res-cont">
            <CartResultContainer/>
          </table>
        </div>
      </ResultsBlock>

    </div>
  )
}

export default Cart