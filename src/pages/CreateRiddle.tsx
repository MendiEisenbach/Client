import { useState } from "react";
import { type Riddle } from "../data/riddles";
import { riddles } from "../data/riddles";

function CreateRiddle() {
  const [name, setName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleSubmit = () => {
    const newRiddle: Riddle = {
      id: riddles.length + 1,
      name,
      taskDescription,
      correctAnswer,
    };
    riddles.push(newRiddle);
    alert("Riddle added!");
    setName("");
    setTaskDescription("");
    setCorrectAnswer("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Create New Riddle</h2>
      <div>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <input placeholder="Task Description" value={taskDescription} onChange={e => setTaskDescription(e.target.value)} />
      </div>
      <div>
        <input placeholder="Correct Answer" value={correctAnswer} onChange={e => setCorrectAnswer(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Add Riddle</button>
    </div>
  );
}

export default CreateRiddle;
