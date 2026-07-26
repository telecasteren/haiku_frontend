export type ProductType = "merch" | "beans" | "equipment";

export interface Product {
  id: number;
  type: ProductType;
  title: string;
  description: string;
  price: number;
  onSale: boolean;
  image?: string;
  addedDate: Date;
}
