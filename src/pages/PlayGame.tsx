import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { riddles } from "../data/riddles";
import { players } from "../data/players";
import type { Player } from "../data/players";


function PlayGame() {
  const { username, role } = useContext(AuthContext);
  const playerName = username ? username : "Guest";

  const [currentRiddle, setCurrentRiddle] = useState<number>(0);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    if (
      answer.toLowerCase() ===
      riddles[currentRiddle].correctAnswer.toLowerCase()
    ) {
    }

    if (currentRiddle + 1 < riddles.length) {
      setCurrentRiddle(currentRiddle + 1);
    } else {
      alert(`Game over! ${playerName} finished all riddles.`);

      const exists = players.some(
        (p: Player) => p.name.toLowerCase() === playerName.toLowerCase()
      );

      if (!exists) {
        players.push({ name: playerName, lowestTime: Infinity });
      }

      navigate("/menu");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>
        Playing as: {playerName} ({role})
      </h2>
      <p>{riddles[currentRiddle].taskDescription}</p>
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
    </div>
  );
}

export default PlayGame;
