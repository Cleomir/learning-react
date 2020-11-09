import React from "react";

export default class StateManipulation extends React.Component {
  state = {
    name: "John doe",
    age: 18,
  };

  handleClick = () => {
    this.setState({
      name: "Foo",
      age: 99,
    });
  };

  render() {
    return (
      <div>
        <p>
          Hello, {this.state.name}. You are {this.state.age} years old.
        </p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
