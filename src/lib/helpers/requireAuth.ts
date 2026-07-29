import "server-only";
import { redirect } from "next/navigation";
import type { User } from "@/lib/models/User";
import { getCurrentUser } from "./getCurrentUser";

export const requireAuth = async (): Promise<User> => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
};
