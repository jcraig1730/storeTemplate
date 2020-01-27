import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime";

import { StateProvider } from "./state/State";
import reducer from "./state/reducers.js";
import App from "./App";

ReactDOM.render(<App />, document.querySelector("#root"));
