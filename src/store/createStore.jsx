import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

function configureStore() {
  let middlewares;
  const sagaMiddleware = createSagaMiddleware();

  if (process.env.NODE_ENV === "development") {
    middlewares = compose(
      applyMiddleware(sagaMiddleware, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    middlewares = compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }

  const store = createStore(rootReducer, middlewares);

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
