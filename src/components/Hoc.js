import React from "react";

const Hoc = (Component) => {
  return (props) => {
    return (
      <div style={{ backgroundColor: "gray" }}>
        <Component {...props} />
      </div>
    );
  };
};

export default Hoc;
