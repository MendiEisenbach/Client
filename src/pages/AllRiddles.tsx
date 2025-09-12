import { useEffect, useState } from "react";
import { getRiddles } from "../services/riddleService";
import "../Style/AllRiddles.css";


function AllRiddles() {
  const [riddles, setRiddles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading riddles...</div>;
  }

  return (
  <div className="riddles">
      <h2>All Riddles</h2>
      <ul>
        {riddles.map((r, index) => (
          <li key={index}>
            <strong>{r.name}</strong>: {r.taskDescription} (Answer:{" "}
            {r.correctAnswer})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllRiddles;

