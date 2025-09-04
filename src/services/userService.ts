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
