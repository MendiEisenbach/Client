import { Link } from "react-router";

function MainMenu() {
  const tokenString = localStorage.getItem("token");
  let username = null;
  let role: string = "guest";


  if (tokenString) {
    try {
      const payload = JSON.parse(atob(tokenString.split(".")[1]));
      username = payload.name;
      role = payload.role;
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Main Menu</h2>

      <ul>
        <li><Link to="/play">Play the Game</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>

        {(role === "user" || role === "admin") && (
          <>
            <li><Link to="/riddles">Read All Riddles</Link></li>
            <li><Link to="/create-riddle">Create a New Riddle</Link></li>
          </>
        )}

        {role === "admin" && (
          <>
            <li><Link to="/update-riddle">Update an Existing Riddle</Link></li>
            <li><Link to="/delete-riddle">Delete a Riddle</Link></li>
          </>
        )}
      </ul>
    </div>
  );
}

export default MainMenu;




