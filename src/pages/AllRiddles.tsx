import { riddles } from "../data/riddles";

function AllRiddles() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>All Riddles</h2>
      <ul>
        {riddles.map((r, index) => (
          <li key={index}>
            <strong>{r.name}</strong>: {r.taskDescription} (Answer: {r.correctAnswer})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllRiddles;
