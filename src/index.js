import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

// Store
import { Provider } from "react-redux";
import store from "./store/createStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
