import { combineReducers } from "redux";
import data from "./data";
import categories from './categories'
const rootReducer = combineReducers({
  data,
  categories 
});

export default rootReducer;
