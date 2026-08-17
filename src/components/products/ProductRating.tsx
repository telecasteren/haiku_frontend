import Link from "next/link";
import type { Review } from "@/lib/models/Product";
import { getAverageRating } from "@/lib/helpers/getAverageRating";
import StarRating from "@/components/products/StarRating";

const ProductRating = ({ reviews }: { reviews: Review[] }) => {
  const averageRating = getAverageRating(reviews);
  const count = reviews.length;

  if (count === 0) {
    return <div className="text-xs text-muted-foreground">No reviews yet</div>;
  }

  return (
    <div className="flex items-center gap-2">
      <StarRating rating={averageRating} />
      <span className="text-xs text-muted-foreground">
        {averageRating.toFixed(1)}
      </span>
      <Link
        href="#reviews"
        className="text-xs text-muted-foreground hover:underline"
      >
        ({count} {count === 1 ? "review" : "reviews"})
      </Link>
      <span className="sr-only">{averageRating.toFixed(1)} out of 5 stars</span>
    </div>
  );
};

export default ProductRating;
