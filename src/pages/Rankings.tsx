import { useState, useEffect } from "react";
import { getPlayers } from "../services/userService";
import "../Style/Rankings.css";

function Rankings() {
  const [players, setPlayers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const data = await getPlayers();
        data.sort((a : any, b : any) => (a.lowestTime ?? Infinity) - (b.lowestTime ?? Infinity));
        setPlayers(data);
      } catch (err) {
        console.error("Error fetching players:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPlayers();
  }, []);

  if (loading) return <div>Loading rankings...</div>;

  return (
    <div className="rankings">
      <h2>Leaderboard</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>
            {index + 1}. {p.name} {p.lowestTime !== null && p.lowestTime !== undefined ? `- ${p.lowestTime} sec` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rankings;
