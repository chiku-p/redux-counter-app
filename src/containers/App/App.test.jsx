import "jest";
import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";

// Store
import { Provider } from "react-redux";
import configureStore from "../../store/createStore";
import App from ".";

afterEach(cleanup);

/** Constants */
const delay = ms => new Promise(rs => setTimeout(rs, ms));
const initialState = {
  counters: [
    { id: "counter1", value: 0 },
    { id: "counter2", value: 10 },
    { id: "counter3", value: 11 },
    { id: "counter4", value: 12 }
  ]
};
const initialValues = initialState.counters.map(i => i.value);

/** Test Cases */
it("should increment counter after 1000ms delay", async () => {
  // Create a store
  const store = configureStore(initialState);

  store.dispatch({ type: "INCREMENT_COUNTER", payload: { id: "counter1" } });

  const firstState = store.getState().counters.map(c => c.value);
  expect(firstState).toEqual(initialValues);

  await delay(1000);

  const secondState = store.getState().counters.map(c => c.value);
  expect(secondState).toEqual([1, 10, 11, 12]);
});

it("should decrement counter after 1000ms delay", async () => {
  // Create a store
  const store = configureStore(initialState);

  store.dispatch({ type: "DECREMENT_COUNTER", payload: { id: "counter1" } });

  const firstState = store.getState().counters.map(c => c.value);
  expect(firstState).toEqual(initialValues);

  await delay(1000);

  const secondState = store.getState().counters.map(c => c.value);
  expect(secondState).toEqual([-1, 10, 11, 12]);
});

it("should update counter values in the ui", async () => {
  // Create a store
  const store = configureStore(initialState);

  // Create the App component
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Wait till component is mounted to DOM
  await Promise.all(
    initialState.counters.map(c =>
      waitForElement(() => getByTestId("counter-container" + c.id))
    )
  );

  // Test initial counter values
  const raw = initialState.counters.map(c =>
    Number(getByTestId("counter-value" + c.id).innerHTML)
  );
  const expectedRawValues = [...initialValues];
  expect(raw).toEqual(expectedRawValues);

  // Fire click events
  fireEvent.click(getByTestId("incrementcounter1"));

  fireEvent.click(getByTestId("decrementcounter2"));
  await delay(1000); // Since the INCREMENT action can not be triggered twice within 1000ms

  fireEvent.click(getByTestId("decrementcounter3"));
  await delay(1000); // Same goes for DECREMENT action

  fireEvent.click(getByTestId("incrementcounter4"));
  await delay(1000); // The final update action is triggered after 1000ms interval

  // Check the new values
  const newValues = initialState.counters.map(c =>
    Number(getByTestId("counter-value" + c.id).innerHTML)
  );
  const expectedNewValues = [1, 9, 10, 13];
  expect(newValues).toEqual(expectedNewValues);
});
