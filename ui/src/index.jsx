import React from "react";
import ReactDOM from "react-dom";

import { StateProvider } from "./state/State";
import reducer from "./state/reducers";
import App from "./components/App";

const initalState = {
  isLoggedIn: false,
  cart: {
    hasCheckedOut: false,
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
