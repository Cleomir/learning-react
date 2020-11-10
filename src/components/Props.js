import { Component } from "react";

export default class Props extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <p>
        Hello, {name}. You are {age} years old.
      </p>
    );
  }
}
