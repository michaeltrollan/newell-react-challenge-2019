import React from 'react';

import './App.css';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  // Update componentDidMount to update clock every second.
  componentDidMount() {
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
      <h1 className="App-clock">
        The time is {this.state.time}.
      </h1>
    );
  }
}
