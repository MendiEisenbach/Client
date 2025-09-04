// const API_URL = "https://riddleproject.onrender.com/api/riddles";
const API_URL = "http://localhost:4545/";

export async function createRiddle(
  name: string,
  taskDescription: string,
  correctAnswer: string
) {
  const token = localStorage.getItem("token");
  console.log(token);

  if (!token) {
    throw new Error("User is not authenticated");
  }
  const res = await fetch(`${API_URL}api/riddles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-cache",
    body: JSON.stringify({ name, taskDescription, correctAnswer }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to create riddle");
  }

  return await res.json();
}
