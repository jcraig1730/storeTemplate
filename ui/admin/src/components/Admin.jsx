import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductsRouter from "./products/ProductsRouter";

const Admin = ({ match }) => {
  return (
    <Router>
      <Switch>
        <Route path={`${match.url}/products`} component={ProductsRouter} />
      </Switch>
    </Router>
  );
};

export default Admin;
