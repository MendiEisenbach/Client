import { useState, useContext } from "react";
import { createRiddle } from "../services/riddleService";
import { AuthContext } from "../context/AuthContext";

function CreateRiddle() {
  const [name, setName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const { token} = useContext(AuthContext); 



  const handleSubmit = async () => {
    try {
      await createRiddle(name, taskDescription, correctAnswer);
      alert("Riddle added successfully!");
      setName("");
      setTaskDescription("");
      setCorrectAnswer("");
    } catch (err: any) {
      alert("Failed to add riddle: " + err.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Create New Riddle</h2>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Task Description"
          value={taskDescription}
          onChange={e => setTaskDescription(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Correct Answer"
          value={correctAnswer}
          onChange={e => setCorrectAnswer(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Add Riddle</button>
    </div>
  );
}

export default CreateRiddle;
