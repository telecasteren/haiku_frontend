import type { User } from "@/lib/models/User";
import { users } from "@/services/mockups/users";

export const updateLastLogin = async (userId: string): Promise<User | null> => {
  const user = users.find((u) => u.id === userId);
  if (!user) return null;

  const now = new Date();
  user.lastLogin = now;
  user.updatedAt = now;
  return user;
};
