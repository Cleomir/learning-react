import { Component } from "react";

export default class RouteParameters extends Component {
  state = {
    id: undefined,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ id });
  }

  render() {
    return (
      <div>
        <h4>Route parameters: {this.state.id}</h4>
      </div>
    );
  }
}
