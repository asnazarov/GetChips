import {combineReducers} from "redux";

import filters from './filters.js';

const rootReduser = combineReducers({
  filters,
})

export default rootReduser