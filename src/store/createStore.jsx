import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// Import root reducer
import rootReducer from "../reducers";

let middlewares;
if(process.env.NODE_ENV === 'development') {
  middlewares = applyMiddleware(thunk, logger);
} else {
  middlewares = applyMiddleware(thunk);
}

export default function(initialState = {}) {
  return createStore(rootReducer, initialState, middlewares);
}
