import { useState } from "react";
import { riddles } from "../data/riddles";

function UpdateRiddle() {
  const [id, setId] = useState<number>(0);
  const [name, setName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleUpdate = () => {
    const riddle = riddles.find(r => r.id === id);
    if (!riddle) return alert("Riddle not found!");
    riddle.name = name || riddle.name;
    riddle.taskDescription = taskDescription || riddle.taskDescription;
    riddle.correctAnswer = correctAnswer || riddle.correctAnswer;
    alert("Riddle updated!");
    setId(0);
    setName("");
    setTaskDescription("");
    setCorrectAnswer("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Update Riddle</h2>
      <div>
        <input type="number" placeholder="Riddle ID" value={id || ""} onChange={e => setId(Number(e.target.value))} />
      </div>
      <div>
        <input placeholder="New Name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <input placeholder="New Task Description" value={taskDescription} onChange={e => setTaskDescription(e.target.value)} />
      </div>
      <div>
        <input placeholder="New Correct Answer" value={correctAnswer} onChange={e => setCorrectAnswer(e.target.value)} />
      </div>
      <button onClick={handleUpdate}>Update Riddle</button>
    </div>
  );
}

export default UpdateRiddle;
