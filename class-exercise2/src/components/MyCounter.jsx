import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";
class Mycounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  allClicksCounter = () => {
    this.setState((prevstate) => ({
      count: prevstate.count + 1,
    }));
  };
  render() {
    return (
      <div className="container">
        <h3>Question 1 and 2</h3>
        <button onClick={this.allClicksCounter}> click Here</button>

        <CounterDisplayer count={this.state.count} />
        <EvenCounterDisplayer count={this.state.count} />
      </div>
    );
  }
}
export default Mycounter;
