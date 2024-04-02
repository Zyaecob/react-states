import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer"

export default class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      lastEvenClick: 0
    };
  }

  ///////////////        METHOD ONE     ////////////////

  allClickCounter = () => {
    this.setState({
      count: this.state.count + 1
    },
      this.evenClickCounter
    );
  }

  evenClickCounter = () => {
    this.setState({
      lastEvenClick: this.state.count % 2 === 0 ? this.state.count : this.state.lastEvenClick
    });
  }



  ///////////////        METHOD TWO     ////////////////

  // allClickCounter = () => {
  //   this.setState(prevState => ({ count: prevState.count + 1 }), () => {
  //     this.evenClickCounter();
  //   });
  // }

  // evenClickCounter = () => {
  //   this.setState(prevState => ({
  //     lastEvenClick: prevState.count % 2 === 0 ? prevState.count : prevState.lastEvenClick
  //   }));
  // }





  render() {
    return (
      <div>
        <button onClick={this.allClickCounter}>CLICK</button>
        <CounterDisplayer count={this.state.count} />
        <EvenCounterDisplayer evenClicks={this.state.lastEvenClick} />

      </div>
    );
  }
}




















































// ///////////////////////////////////////////////////////////////////////////////privState method
// ///////////////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react';
// import CounterDisplayer from './CounterDisplayer';
// import EvenCounterDisplayer from './EvenCounterDisplayer';

// export default class MyCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { clicks: [] };
//   }

//   allClicksCounter = () => {
//     this.setState(prevState => ({ clicks: [...prevState.clicks, prevState.clicks.length + 1] }), this.evenClicksCounter);
//   }

//   evenClicksCounter = () => {
//     this.setState(prevState => ({ clicks: prevState.clicks.filter(click => click % 2 === 0) }));
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.allClicksCounter}>Click me!</button>

//         <CounterDisplayer clicks={this.state.clicks} />
//         <EvenCounterDisplayer clicks={this.state.clicks} />
//       </div>
//     );
//   }
// }

