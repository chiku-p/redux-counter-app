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
import createStore from "../../store/createStore";
import App from ".";

afterEach(cleanup);

it("should create and update counter values", async () => {
  // Initial state
  const initialState = {
    counters: [
      { id: "counter1", value: 0 },
      { id: "counter2", value: 10 },
      { id: "counter3", value: 11 },
      { id: "counter4", value: 12 }
    ]
  };

  // Create a store
  const store = createStore(initialState);

  // Create the App component
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Wait till component is mounted to DOM
  await Promise.all(
    initialState.counters.map(c => {
      return waitForElement(() => getByTestId("counter-container" + c.id));
    })
  );

  // Test initial counter values
  const raw = initialState.counters.map(c =>
    Number(getByTestId("counter-value" + c.id).innerHTML)
  );
  const expectedRawValues = [0, 10, 11, 12];
  expect(raw).toEqual(expectedRawValues);


  // Fire click events
  fireEvent.click(getByTestId("incrementcounter1"));
  fireEvent.click(getByTestId("decrementcounter2"));
  fireEvent.click(getByTestId("decrementcounter3"));
  fireEvent.click(getByTestId("incrementcounter4"));

  // Check the new values
  const newValues = initialState.counters.map(c =>
    Number(getByTestId("counter-value" + c.id).innerHTML)
  );
  const expectedNewValues = [1, 9, 10, 13];
  expect(newValues).toEqual(expectedNewValues);
});
