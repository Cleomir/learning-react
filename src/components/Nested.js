import { Component } from "react";

import Class from "./Class";
import Props from "./Props";
import Stateless from "./Stateless";
import Conditional from "./Conditional";
import FunctionProps from "./FunctionProps";

export default class Nested extends Component {
  state = {
    name: "",
  };

  changeName = (name) => {
    this.setState({
      name,
    });
  };

  render() {
    return (
      <div>
        <h1>Nested component</h1>
        <Class />
        <Props name="Foo" age="50" />
        <Stateless name="Bar" />
        <Conditional age={30} />
        <p>Your name: {this.state.name}</p>
        <FunctionProps changeName={this.changeName} />
      </div>
    );
  }
}
