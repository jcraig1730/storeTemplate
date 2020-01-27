import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductsRouter from "./products/ProductsRouter";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={`/products`} component={ProductsRouter} />
      </Switch>
    </Router>
  );
};

export default App;
