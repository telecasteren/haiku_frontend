export type UserStatus = "active" | "inactive";

export interface User {
  id: string;
  role: string;
  name: string;
  email: string;
  emailVerified: boolean;
  emailHash: string;
  passwordHash: string;
  status: UserStatus;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
  preferredPaymentMethod?: string; // ex. credit card
}
