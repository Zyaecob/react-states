import React, { Component } from 'react'

export default class EvenCounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h2>Even clicks are: {this.props.evenClicks}</h2>
      </div>
    )
  }
}
