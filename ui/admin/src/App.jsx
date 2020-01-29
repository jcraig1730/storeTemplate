import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductsRouter from "./components/products/ProductsRouter";
import { StateProvider } from "./state/State";
import { reducer } from "./state/reducers";

const App = props => {
  return (
    <Router>
      <Switch>
        <Route path={`/admin/products`} component={ProductsRouter} />
      </Switch>
    </Router>
  );
};

export default App;
