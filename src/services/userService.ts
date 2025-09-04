const serverUrl = 'https://riddleproject.onrender.com';

export async function loginUser(username: string, password: string) {
  const res = await fetch(`${serverUrl}/api/players/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
}

export async function signUpUser(username: string, password: string) {
  const res = await fetch(`${serverUrl}/api/players/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    throw new Error("Registration failed");
  }

  return res.json();
}

export async function getPlayers() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${serverUrl}/api/players`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!res.ok) throw new Error("Failed to fetch players");
  return res.json(); 
}

export async function postPlayerTime(name: string, time: number) {
  const res = await fetch(`${serverUrl}/api/players`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, time }),
  });

  if (!res.ok) throw new Error("Failed to save player time");
  return res.json(); 
}

