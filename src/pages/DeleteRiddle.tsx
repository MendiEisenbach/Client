import { useState } from "react";
import { riddles } from "../data/riddles";
import "../Style/DeleteRiddle.css";

function DeleteRiddle() {
  const [id, setId] = useState<number>(0);

  const handleDelete = () => {
    const index = riddles.findIndex(r => r.id === id);
    if (index === -1) return alert("Riddle not found!");
    riddles.splice(index, 1);
    alert("Riddle deleted!");
    setId(0);
  };

  return (
    <div className="delete-riddle">
      <h2>Delete Riddle</h2>
      <input type="number" placeholder="Riddle ID" value={id || ""} onChange={e => setId(Number(e.target.value))} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteRiddle;
