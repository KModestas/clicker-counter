import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: false
    };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    // if state is not 0, decrement
    if (this.state.counter !== 0) {
      this.setState({ counter: this.state.counter - 1 });
      // if it is, throw error
    } else this.setState({ error: true });
  }

  increment() {
    if (this.state.error) this.setState({ error: false });
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">COUNTER: {this.state.counter}</h1>
        {/* if error, display error message */}
        {this.state.error && (
          <h2 data-test="error-message" style={{ color: "red" }}>
            Counter cannot go below zero!
          </h2>
        )}
        <button data-test="increment-button" onClick={this.increment}>
          INCREMENT +
        </button>
        <button data-test="decrement-button" onClick={this.decrement}>
          DECREMENT -
        </button>
      </div>
    );
  }
}

export default App;
