import "server-only";
import { cookies } from "next/headers";
import type { User } from "@/lib/models/User";
import { verifySession } from "@/lib/auth/session";
import { users } from "@/services/mockups/users";

const SESSION_COOKIE = "session";

export const getCurrentUser = async (): Promise<User | null> => {
  const cookieStore = await cookies();

  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const session = await verifySession(token);
  if (!session) return null;

  const user = users.find((u) => u.id === session.userId);
  if (!user || user.status !== "active") return null;
  return user;
};
