import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    let role: string;
    if (username.toLowerCase() === "admin") {
      role = "admin";
    } else {
      role = "user";
    }

    const fakeToken = "xyz789";
    login(username, role, fakeToken);

    navigate("/menu");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;


