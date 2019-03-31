import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

function create(reducer, initialState) {
  const middlewares = applyMiddleware(thunk, logger);
  return createStore(reducer, initialState, middlewares);
}

export default create;