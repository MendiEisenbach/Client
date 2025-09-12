import { Link } from "react-router-dom";
import "../Style/Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="home-link">Home</Link>
    </nav>
  );
}

export default Navbar;


