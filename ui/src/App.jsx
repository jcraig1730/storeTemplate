import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Admin from "./routes/admin/Admin";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
};

export default App;
