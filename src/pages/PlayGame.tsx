import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { postPlayerTime } from "../services/userService";
import { getRiddles } from "../services/riddleService";
import "../Style/PlayGame.css";

function PlayGame() {
  let playerName = "Guest";
  const tokenString = localStorage.getItem("token");
  if (tokenString) {
    try {
      const payload = JSON.parse(atob(tokenString.split(".")[1]));
      playerName = payload.name || "Guest";
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }

  const [riddles, setRiddles] = useState<any[]>([]);
  const [currentRiddle, setCurrentRiddle] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRiddles() {
      try {
        const data = await getRiddles();
        setRiddles(data);
      } catch (err) {
        console.error("Error fetching riddles:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRiddles();
  }, []);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setElapsedTime((prev) => prev + 1000);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleAnswer = async (answer: string) => {
    if (!riddles[currentRiddle]) return;

    const correctAnswer = riddles[currentRiddle].correctAnswer.toLowerCase();
    if (answer.trim().toLowerCase() === correctAnswer) {
      setFeedback("Correct!");
      if (currentRiddle + 1 < riddles.length) {
        setCurrentRiddle(currentRiddle + 1);
      } else {
        if (timerRef.current) clearInterval(timerRef.current);

        try {
          await postPlayerTime(playerName, Math.floor(elapsedTime / 1000));
        } catch (err) {
          console.error("Error saving time:", err);
        }

        alert(`Game over! ${playerName} finished all riddles in ${Math.floor(elapsedTime / 1000)} sec.`);
        navigate("/menu");
      }
    } else {
      setFeedback("Wrong answer, try again.");
    }
  };

  if (loading) return <div>Loading riddles...</div>;
  if (riddles.length === 0) return <div>No riddles available.</div>;

return (
  <div className="play">
    <p className="time">Time elapsed: {Math.floor(elapsedTime / 1000)} sec</p>
    <p className="question">{riddles[currentRiddle].taskDescription}</p>
    <input
      type="text"
      placeholder="Type your answer"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleAnswer((e.target as HTMLInputElement).value);
          (e.target as HTMLInputElement).value = "";
        }
      }}
    />
    <p className="feedback">{feedback}</p>
  </div>
);
}

export default PlayGame;