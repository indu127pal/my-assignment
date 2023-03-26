import { combineReducers } from "redux";
import sampleReducer from './reducers';

export default combineReducers({
  sampleData: sampleReducer,
});