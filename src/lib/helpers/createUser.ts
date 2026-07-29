import { hash } from "bcrypt";
import { createHash, randomUUID } from "node:crypto";
import { normalizeString } from "@/lib/utils";
import type { User } from "@/lib/models/User";
import { getUserByEmail } from "./getUserByEmail";
import { users } from "@/services/mockups/users";

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
  preferredPaymentMethod?: string;
};

export const createUser = async (input: CreateUserInput): Promise<User> => {
  const { name, email, password, preferredPaymentMethod } = input;
  const normalizedName = normalizeString(name);
  const normalizedEmail = normalizeString(email);
  const hashedPassword = await hash(password, 10);
  const hashedEmail = createHash("sha256")
    .update(normalizedEmail)
    .digest("hex");

  const existingUser = await getUserByEmail(normalizedEmail);
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const newUser: User = {
    id: randomUUID(),
    role: "customer",
    name: normalizedName,
    email: normalizedEmail,
    emailHash: hashedEmail,
    emailVerified: false,
    passwordHash: hashedPassword,
    preferredPaymentMethod: preferredPaymentMethod || "",
    status: "active",
    lastLogin: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  users.push(newUser);
  return newUser;
};
