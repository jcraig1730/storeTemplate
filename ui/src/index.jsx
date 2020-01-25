import React from "react";
import ReactDOM from "react-dom";

import { StateProvider } from "./state/State";
import reducer from "./state/reducers.js";
import App from "./components/App";

console.log(reducer, "hi");
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
