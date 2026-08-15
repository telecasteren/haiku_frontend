import type { User } from "@/lib/models/User";
import { users } from "@/services/mockups/users";
import { normalizeString } from "@/lib/utils";

export async function getUserByEmail(email: string): Promise<User | null> {
  const normalizedEmail = normalizeString(email);
  const user = users.find((u) => normalizeString(u.email) === normalizedEmail);
  return user ?? null;
}

// later when fetching from API
// const res = await fetch(`${process.env.API_URL}/users?email=${normalizedEmail}`);
// const user = await res.json();
