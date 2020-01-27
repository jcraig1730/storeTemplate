import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductDetail from "./views/ProductDetail";
import Products from "./views/Products";

const ProductsRouter = ({ match }) => {
  return (
    <Router>
      <Switch>
        <Route exact path={`${match.url}/`} component={Products} />
        <Route path={`${match.url}/:id`} component={ProductDetail} />
      </Switch>
    </Router>
  );
};

export default ProductsRouter;
