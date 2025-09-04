import { Link } from "react-router-dom";

function Guest() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Guest menu</h2>
      <ul>
        <li>
          <Link to="/play">Play the Game</Link>
        </li>
        <li>
          <Link to="/rankings">Leaderboard</Link>  
        </li>
      </ul>
    </div>
  );
}

export default Guest;
