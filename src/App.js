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
  }

  decrement() {
    if (this.state.counter !== 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else this.setState({ error: true });
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">COUNTER: {this.state.counter}</h1>
        {this.state.error && (
          <h2 style={{ color: "red" }}>Counter cannot go below zero!</h2>
        )}
        <button
          data-test="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
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
