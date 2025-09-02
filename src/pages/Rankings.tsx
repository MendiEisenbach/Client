import { players } from "../data/players";

function Rankings() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Player Rankings</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>
            {index + 1}. {p.name} {p.lowestTime !== undefined ? `- ${p.lowestTime} sec` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rankings;
