import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Contents from "./components/Contents";
import "./components/Global/global.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Jumbotron />
          <Route exact path="/" component={Contents} />
        </div>
      </Router>
    );
  }
}

export default App;
