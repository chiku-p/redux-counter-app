export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export function incrementCounter(id, val) {
  return {
    type: INCREMENT,
    payload: {
      id,
      value: val
    }
  };
}

export function decrementCounter(id, val) {
  return {
    type: DECREMENT,
    payload: {
      id,
      value: val
    }
  };
}
