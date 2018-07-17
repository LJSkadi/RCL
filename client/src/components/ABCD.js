import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0
    };
    this.handleXClick = this.handleXClick.bind(this);
  }
  handleXClick() {
    this.setState({
      x: this.state.x + 1
    });
  }
  render() {
    return (
      <div className="component">
        <h1>Component A</h1>
        this.state.x = {this.state.x} <br />
        this.handleXClick => {"this.setState({x: this.state.x + 1})"} <br />
        <B x={this.state.x} onXClick={this.handleXClick} />
        <D x={this.state.x} onXClick={this.handleXClick} />
      </div>
    );
  }
}
class B extends React.Component {
  render() {
    return (
      <div className="component">
        <h1>Component B</h1>
        this.props.x = {this.props.x} <br />
        this.props.onXClick => (function in A) <br />
        <C x={this.props.x} onXClick={this.props.onXClick} />
      </div>
    );
  }
}
class C extends React.Component {
  render() {
    return (
      <div className="component">
        <h1>Component C</h1>
        this.props.x = {this.props.x} <br />
        this.props.onXClick => (function in B) <br />
        <button onClick={this.props.onXClick}>{this.props.x}</button> onClick =>
        this.props.onXClick
      </div>
    );
  }
}
class D extends React.Component {
  render() {
    return (
      <div className="component">
        <h1>Component D</h1>
        this.props.x = {this.props.x} <br />
        this.props.onXClick => (function in A) <br />
        <button onClick={this.props.onXClick}>{this.props.x}</button> onClick =>
        this.props.onXClick
      </div>
    );
  }
}

ReactDOM.render(<A />, document.getElementById("root"));
