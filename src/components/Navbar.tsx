import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/signup">Sign Up</Link> |{" "}
      <Link to="/login">Log In</Link> |{" "}
      <Link to="/guest">Guest</Link> |{" "}
      <Link to="/menu">Main Menu</Link> |{" "}
      <Link to="/play">Play Game</Link> |{" "}
      <Link to="/riddles">All Riddles</Link> |{" "}
      <Link to="/rankings">Rankings</Link>
    </nav>
  );
}

export default Navbar;
