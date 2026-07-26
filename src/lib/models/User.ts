export type UserStatus = "active" | "inactive";

export interface User {
  id: string;
  name: string;
  email: string;
  status: UserStatus;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
  preferredPaymentMethod: string;  // ex. credit card
}
