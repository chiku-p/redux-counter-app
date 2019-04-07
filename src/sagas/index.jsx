import { all } from "redux-saga/effects";

import incrementCounterSaga from "./incrementCounterSaga";
import decrementCounterSaga from "./decrementCounterSaga";

function* rootSaga() {
  yield all([incrementCounterSaga(), decrementCounterSaga()]);
}

export default rootSaga;
