import { Component } from "react";

export default class FunctionProps extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changeName(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
