import React from "react";
import HomePage from "./page/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import shopPage from "./shop/shop.component";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={shopPage} />
      </Switch>
    </div>
  );
}

export default App;
