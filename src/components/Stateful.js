import React from "react";
export default class Stateful extends React.Component {
  state = {
    name: "John",
  };

  render() {
    return <h1>Hello, {this.state.name}</h1>;
  }
}
