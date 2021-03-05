import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./components/home-page/home-page.component";
import GamesPage from "./components/games-page/games-page.component";
import {
  BrowserRouter as Router,
  Switch,
  Route
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
          <Route path="/games">
            <GamesPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
