import React from "react";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Intro from "./components/Intro";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Intro />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
