import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Facebook from "./components/layout/Facebook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Facebook Login with React</h1>
        </header>
        <p className="App-intro">Demo for Facebook Authentication</p>
        <Facebook />
      </div>
    );
  }
}

export default App;
