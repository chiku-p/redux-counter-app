export const incrementCounter = (id, value) => ({
  type: "INCREMENT_COUNTER",
  payload: {
    id,
    value
  }
});

export const decrementCounter = (id, value) => ({
  type: "DECREMENT_COUNTER",
  payload: {
    id,
    value
  }
});
