import React from "react";
import HomePage from "./page/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import shopPage from "./shop/shop.component";
import Header from "./components/Header/header.component";
import SignInAndSignOut from "./page/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "../src/FIrebase/firebase.utils";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={shopPage} />
          <Route path="/signIn" component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
