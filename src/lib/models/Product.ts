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
}
