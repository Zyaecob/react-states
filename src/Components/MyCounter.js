import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";

export default class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  allClickcounter = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.allClickcounter}>click:</button>
        <CounterDisplayer count={this.state.count} />

      </div>
    );
  }
}