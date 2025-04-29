import React, { Component } from "react";

export default class CounterDisplayer extends Component {
  render() {
    const { count } = this.props;
    return (
      <div >
        {/* <h1>This is my counterDispla</h1> */}
        <h1>All click count:{count}</h1>
      </div>
    );
  }
}
