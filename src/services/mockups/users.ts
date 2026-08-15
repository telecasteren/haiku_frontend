import { User } from "@/lib/models/User";

const globalForUsers = global as typeof globalThis & { users?: User[] };

if (!globalForUsers.users) {
  globalForUsers.users = [
    {
      id: "1",
      role: "admin",
      name: "Elena Marquez",
      email: "elena@haikucoffee.com",
      emailVerified: true,
      emailHash: "",
      passwordHash: "",
      status: "active",
      lastLogin: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      preferredPaymentMethod: "",
    },
    {
      id: "2",
      role: "user",
      name: "John Doe",
      email: "john@haikucoffee.no",
      emailVerified: false,
      emailHash: "",
      passwordHash: "",
      status: "active",
      lastLogin: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      preferredPaymentMethod: "",
    },
  ];
}

export const users = globalForUsers.users;
