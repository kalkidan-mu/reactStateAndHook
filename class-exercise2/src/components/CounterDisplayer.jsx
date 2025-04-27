import React, { Component } from "react";

export default class CounterDisplayer extends Component {
  render() {
    const { count } = this.props;
    return (
      <div className="container">
        <h1>This is my counterDisplayer</h1>
        <h1>count:{count}</h1>
      </div>
    );
  }
}
