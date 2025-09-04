import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../services/userService";

function Login() {
  const { setUsername, setRole, setToken } = useContext(AuthContext);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log(usernameInput, passwordInput);

      const data = await loginUser(usernameInput, passwordInput);
      console.log(data);
      setUsername(data.username);
      setRole(data.role);
      setToken(data.token.token);
      localStorage.setItem("token", data.token.token);

      navigate("/menu");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
