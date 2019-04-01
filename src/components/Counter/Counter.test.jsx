import "jest";
import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import Counter from ".";

afterEach(cleanup);

it("should initialize counter value", async () => {
  // Set initial values
  const id = "sample";
  const value = 12;
  let incClickResult, decClickResult;

  // Create a <Counter /> component
  const { getByText, getByTestId } = render(
    <Counter
      id={id}
      value={value}
      increment={id => (incClickResult = id)}
      decrement={id => (decClickResult = id)}
    />
  );

  // Wait till Component is mounted to DOM
  await waitForElement(() => getByTestId("counter-container" + id));

  // Check for counter value
  expect(Number(getByTestId("counter-value" + id).innerHTML)).toEqual(value);

  // Check for buttons
  expect(getByText("Increment")).toBeTruthy();
  expect(getByText("Decrement")).toBeTruthy();

  // Click the buttons
  fireEvent.click(getByTestId("increment" + id), { button: 0 });
  fireEvent.click(getByTestId("decrement" + id), { button: 0 });

  // Check if IDs received from the click handler
  expect(incClickResult).toEqual(id);
  expect(decClickResult).toEqual(id);
});
