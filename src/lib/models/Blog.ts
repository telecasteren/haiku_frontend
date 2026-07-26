export interface Blog {
  id: number;
  slug: string;
  author: string;
  category: string;
  title: string;
  image?: string;
  excerpt?: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
}
