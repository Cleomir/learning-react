import { Component } from "react";

import Class from "./Class";

export default class Nested extends Component {
  render() {
    return (
      <div>
        <h1>Nested component</h1>
        <Class />
      </div>
    );
  }
}
