import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime";

import { StateProvider } from "./state/State";
import reducer from "./state/reducers";
import App from "./App";

const initialState = {
  isLoggedIn: false,
  user: {
    username: "",
    token: ""
  },
  products: [],
  vendors: [],
  sales: [],
  purchases: [],
  customers: [],
  isError: { error: false, errorOn: "", title: "", message: "", errorOn: "" }
};

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.querySelector("#root")
);
