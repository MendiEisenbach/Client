import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/signup">Sign Up</Link> |{" "}
      <Link to="/login">Log In</Link> |{" "}
      <Link to="/guest">Guest</Link> |{" "}
      <Link to="/menu">Main Menu</Link>
    </nav>
  );
}

export default Navbar;
