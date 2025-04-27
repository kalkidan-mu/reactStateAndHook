import React, { Component } from "react";

export default class EvenCounterDisplayer extends Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        {count % 2 === 0 ? (
          <h2>even click:{count}</h2>
        ) : (
          <h2>even click:{count - 1}</h2>
        )}
      </div>
    );
  }
}
