import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({ counters: counterReducer });

export default rootReducer;
