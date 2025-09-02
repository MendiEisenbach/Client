import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    const fakeToken = "abc123";
    login(username, "user", fakeToken);

    navigate("/menu"); 
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;

