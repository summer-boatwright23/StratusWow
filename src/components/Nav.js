import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/Locations">
        <div>Locations Index</div>
      </Link>
    </nav>
  );
};

export default Nav;
