import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime";

import { StateProvider } from "./state/State";
import reducer from "./state/reducers.js";
import App from "./App";

window.apiUrl = "http://localhost:8000/api";

const initalState = {
  isLoggedIn: false,
  cart: {
    isCheckedOut: false,
    items: []
  },
  name: null,
  viewHistory: null,
  purchaseHistory: null
};

ReactDOM.render(
  <StateProvider initalState={initalState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.querySelector("#root")
);
