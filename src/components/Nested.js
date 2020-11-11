import { Component } from "react";

import Class from "./Class";
import Props from "./Props";
import Stateless from "./Stateless";
import Conditional from "./Conditional";

export default class Nested extends Component {
  render() {
    return (
      <div>
        <h1>Nested component</h1>
        <Class />
        <Props name="Foo" age="50" />
        <Stateless name="Bar" />
        <Conditional age={30} />
      </div>
    );
  }
}
