const initialState = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 }
];

const counterRootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.map(c =>
        c.id === action.payload.id ? { id: c.id, value: c.value + 1 } : c
      );

    case "DECREMENT":
      return state.map(c =>
        c.id === action.payload.id ? { id: c.id, value: c.value - 1 } : c
      );

    default:
      return state;
  }
};

export default counterRootReducer;
