import create from "./createStore";
import counterRootReducer from "../reducers/counterReducer";

export const initialState = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 }
];

export default create(counterRootReducer, initialState);
