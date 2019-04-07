import { take, delay, call, put } from "redux-saga/effects";

function* incrementCounter(payload) {
  yield put({ type: "INCREMENT", payload });
  return;
}

function* watchIncrementCounter() {
  while (true) {
    const { payload } = yield take("INCREMENT_COUNTER");
    yield delay(1000);
    yield call(incrementCounter, payload);
  }
}

export default watchIncrementCounter;
