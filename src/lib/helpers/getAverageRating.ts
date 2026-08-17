import type { Review } from "@/lib/models/Product";

export const getAverageRating = (reviews: Review[]): number => {
  if (reviews.length === 0) return 0;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
};
