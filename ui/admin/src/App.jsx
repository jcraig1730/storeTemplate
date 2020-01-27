import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductsRouter from "./components/products/ProductsRouter";
import { StateProvider } from "./state/State";
import { reducer } from "./state/reducers";

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

const App = props => {
  return (
    <StateProvider initalState={initalState} reducer={reducer}>
      <Router>
        <Switch>
          <Route path={`/admin/products`} component={ProductsRouter} />
        </Switch>
      </Router>
    </StateProvider>
  );
};

export default App;
