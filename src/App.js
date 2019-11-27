import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    counter: 0
  };
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">COUNTER: {this.state.counter}</h1>
        <button
          data-test="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          INCREMENT
        </button>
      </div>
    );
  }
}

export default App;
