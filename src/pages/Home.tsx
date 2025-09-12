import { Link } from "react-router";
import "../Style/Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the trivia quiz!</h1>
      <ul>
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/guest">Play as Guest</Link></li>
      </ul>
    </div>
  );
}

export default Home;

