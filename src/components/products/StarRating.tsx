import { Star, StarHalf } from "lucide-react";

const StarRating = ({
  rating,
  size = 20,
}: {
  rating: number;
  size?: number;
}) => {
  const clampedRating = Math.max(0, Math.min(5, rating));
  const roundedRating = Math.round(clampedRating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const halfStar = roundedRating - fullStars === 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="inline-flex gap-0.5" aria-hidden="true">
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star
          key={`full-${index}`}
          size={size}
          fill="currentColor"
          strokeWidth={2}
        />
      ))}

      {halfStar && <StarHalf size={size} fill="currentColor" strokeWidth={2} />}

      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star key={`empty-${index}`} size={size} fill="none" strokeWidth={2} />
      ))}
    </div>
  );
};

export default StarRating;
