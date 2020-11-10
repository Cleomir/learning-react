import { Component } from "react";

export default class List extends Component {
  state = {
    people: [
      {
        name: "John",
        age: 50,
      },
      {
        name: "Jane",
        age: 30,
      },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.people.map(({ name, age }, index) => (
          <li key={index}>
            Name: {name}, age: {age}
          </li>
        ))}
      </ul>
    );
  }
}
