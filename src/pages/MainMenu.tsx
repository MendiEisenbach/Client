import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function MainMenu() {
  const { username, role } = useContext(AuthContext);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Main Menu</h2>
      <p>{username ? `Logged in as: ${username} (${role})` : "You are a guest"}</p>

      <ul>
        <li><Link to="/play">Play the Game</Link></li>

        {role !== "guest" && (
          <>
            <li><Link to="/create-riddle">Create a New Riddle</Link></li>
            <li><Link to="/riddles">Read All Riddles</Link></li>
          </>
        )}

        {role === "admin" && (
          <>
            <li><Link to="/update-riddle">Update an Existing Riddle</Link></li>
            <li><Link to="/delete-riddle">Delete a Riddle</Link></li>
            <li><Link to="/rankings">Player Rankings</Link></li>
          </>
        )}
      </ul>
    </div>
  );
}

export default MainMenu;


