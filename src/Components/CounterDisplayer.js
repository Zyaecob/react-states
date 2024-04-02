import React, { Component } from "react"

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h2>All click are: {this.props.count}</h2>
      </div>
    );
  }
}


