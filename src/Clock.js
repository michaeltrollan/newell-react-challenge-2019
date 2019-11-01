import React from 'react';

import './App.css';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="App-clock jumbotron-heading">
          The time is {this.state.time}.
        </h1>
      </div>
    );
  }
}
