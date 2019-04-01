import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// Import root reducer
import rootReducer from "../reducers";

const middlewares = applyMiddleware(thunk, logger);
export default createStore(rootReducer, middlewares);
