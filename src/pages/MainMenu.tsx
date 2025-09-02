import { Link } from "react-router";

function MainMenu() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Main Menu</h2>
      <ul>
        <li>Start New Game</li>
        <li>View Scores</li>
        <li>Settings</li>
        <li><Link to="/"> Back to Home</Link></li>
      </ul>
    </div>
  );
}

export default MainMenu;
