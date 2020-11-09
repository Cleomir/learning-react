import React from "react";

export default class Events extends React.Component {
  handleClick(e) {
    console.log(e.target);
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
