import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function MainMenu() {
  const { username, role } = useContext(AuthContext);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Main Menu</h2>
      <p>{username ? `Logged in as: ${username} (${role})` : "You are a guest"}</p>

      <ul>
        <li>Play the Game</li>
        {role === "admin" && (
          <>
            <li>View All Riddles</li>
            <li>Player Rankings</li>
          </>
        )}
      </ul>
    </div>
  );
}

export default MainMenu;
