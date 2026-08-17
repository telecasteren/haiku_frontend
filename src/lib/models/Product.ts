import type { SafeUser } from "./User";

export type ProductType = "merch" | "beans" | "equipment";

export interface Product {
  id: number;
  slug: string;
  type: ProductType;
  title: string;
  description: string;
  price: number;
  salesPrice: number;
  onSale: boolean;
  image?: string;
  addedDate: string;
  reviews: Review[];
}

export interface Review {
  id: number;
  title: string;
  content: string;
  author: SafeUser;
  createdAt: string;
  rating: number;
}
