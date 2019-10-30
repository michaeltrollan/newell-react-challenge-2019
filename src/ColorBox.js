import React from 'react';

export default class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      first: "#FF0000",
      second: "#0000FF"
    };
  }

  // Given the constructor, complete First() and Second() methods to update ColorBox h1 background color.
  First() {
  }

  Second() {
  }

  changeFirstColor(evt) {
    this.setState({
      first: evt.target.value
    })
  }

  changeSecondColor(evt) {
    this.setState({
      second: evt.target.value
    })
  }

  render() {
    const styles = {backgroundColor: this.state.color};
    return (
      <div className="col-md-9">
        {this.props.title ? <h1 className="title">{this.props.title}</h1> : null}
        <h1 className="box" style={styles}>ColorBox</h1>
        <div className="row col-sm-5">
          <h3>Choose Your First Color</h3>
          <div className="input-group mb-5">
            <input
              placeholder="HEX Color Code"
              onChange={this.changeFirstColor.bind(this)}
              className="input form-control"
              type="text"
              aria-label="Hex Color" aria-describedby="Hex color one"
              value={this.state.first}/>
            <div className="input-group-append">
              <button type="button" onClick={this.First.bind(this)} className="btn btn-primary">First</button>
            </div>
          </div>
        </div>

        <div className="row col-sm-5">
          <h3>Choose Your Second Color</h3>
          <div className="input-group mb-5">
            <input
              placeholder="HEX Color Code"
              onChange={this.changeSecondColor.bind(this)}
              className="input form-control"
              type="text"
              aria-label="Hex Color" aria-describedby="Hex color one"
              value={this.state.second}/>
            <div className="input-group-append">
              <button type="button" onClick={this.Second.bind(this)} className="btn btn-primary">Second</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
