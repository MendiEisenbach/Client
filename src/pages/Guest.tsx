import { Link } from "react-router-dom";
export default Guest;


import "../Style/Guest.css";

function Guest() {
  return (
    <div className="guest">
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

