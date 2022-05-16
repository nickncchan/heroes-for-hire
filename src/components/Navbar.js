import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/heroes">Heroes</Link>
    </nav>
  );
};

export default Navbar;
