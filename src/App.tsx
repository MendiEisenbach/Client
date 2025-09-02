import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Guest from "./pages/Guest";
import MainMenu from "./pages/MainMenu";
import PlayGame from "./pages/PlayGame";
import AllRiddles from "./pages/AllRiddles";
import Rankings from "./pages/Rankings";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/menu" element={<MainMenu />} />
          <Route path="/play" element={<PlayGame />} />
          <Route path="/riddles" element={<AllRiddles />} />
          <Route path="/rankings" element={<Rankings />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
