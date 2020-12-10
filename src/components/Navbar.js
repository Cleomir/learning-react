import { NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
  // setTimeout(() => props.history.push("/contact"), 2000);
  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/hoc">HOC</NavLink>
      </li>
      <li>
        <NavLink to="/axios">Axios</NavLink>
      </li>
      <li>
        <NavLink to="/123">Route Parameters</NavLink>
      </li>
    </ul>
  );
};

export default withRouter(Navbar);
