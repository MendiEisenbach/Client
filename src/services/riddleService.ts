const API_URL = "https://riddleproject.onrender.com/api/riddles";


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
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ name, taskDescription, correctAnswer })
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to create riddle");
  }

  return await res.json(); 
}
