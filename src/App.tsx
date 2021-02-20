import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./components/home-page/home-page.component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
