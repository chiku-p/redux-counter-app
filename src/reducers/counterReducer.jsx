import { INCREMENT, DECREMENT } from "../actions/counterActions";
import { initialState } from "../store/counterStore";

function counterRootReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.map(c =>
        c.id === action.payload.id ? { id: c.id, value: c.value + 1 } : c
      );

    case DECREMENT:
      return state.map(c =>
        c.id === action.payload.id ? { id: c.id, value: c.value - 1 } : c
      );

    default:
      return state;
  }
}
export default counterRootReducer;
