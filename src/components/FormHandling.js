import React from "react";

export default class FormHandling extends React.Component {
  state = {
    name: "John doe",
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Hello, {this.state.name} </h1>
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}
