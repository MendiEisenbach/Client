import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const fakeToken = "xyz789";
    login(username, "user", fakeToken);

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

