import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

// Store
import { Provider } from "react-redux";
import counterStore from "./store/counterStore";

ReactDOM.render(
  <Provider store={counterStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
