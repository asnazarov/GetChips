import React from 'react';
import {Conditions, SearchForm} from "../components";

const WorkingConditions = () => {

  return (
    <div className="container">
      {/*<h2>Страница условия работы</h2>*/}
      <SearchForm/>
      <Conditions/>
    </div>
  )
}

export default WorkingConditions;