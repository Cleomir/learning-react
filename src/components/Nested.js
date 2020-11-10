import { Component } from "react";

import Class from "./Class";
import Props from "./Props";

export default class Nested extends Component {
  render() {
    return (
      <div>
        <h1>Nested component</h1>
        <Class />
        <Props name="Foo" age="50" />
      </div>
    );
  }
}
