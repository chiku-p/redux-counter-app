import { take, delay, call, put } from "redux-saga/effects";

function* decrementCounter(payload) {
  yield put({ type: "DECREMENT", payload });
  return;
}

function* watchDecrementCounter() {
  while (true) {
    const { payload } = yield take("DECREMENT_COUNTER");
    yield delay(1000);
    yield call(decrementCounter, payload);
  }
}

export default watchDecrementCounter;
