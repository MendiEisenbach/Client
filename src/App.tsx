import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Guest from "./pages/Guest";
import MainMenu from "./pages/MainMenu";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/menu" element={<MainMenu />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
