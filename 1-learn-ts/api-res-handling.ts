interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUser(id: number): Promise<string> {
  const res = await fetch(`/api/users/${id}`);
  const user: User | null = await res.json();

  if(!user) { // prevent user doesn't exist error
    throw new Error("User not found");
  }

  return user.name.toUpperCase(); // safe access
}

fetchUser(999);