import {  useContext, useState } from "react";
import { useNavigate } from "react-router";
import { signUpUser } from "../services/userService";
import { AuthContext } from "../context/AuthContext";

function SignUp() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();
  const { setUsername, setRole, setToken} = useContext(AuthContext)
  const handleRegister = async () => {
    try {
    const res=  await signUpUser(usernameInput, passwordInput);
    setToken(res.token)
    setRole(res.token.role);
    setUsername(res.token.username);
    localStorage.setItem("token", res.token);

      alert("SignUp successfully! Please login.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>SignUp</h2>
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
      <button onClick={handleRegister}>SignUp</button>
    </div>
  );
}

export default SignUp;
