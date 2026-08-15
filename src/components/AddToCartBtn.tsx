"use client";

import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/models/Product";

export default function AddToCartBtn({ product }: { product: Product }) {
  const addToCart = (product: Product) => {
    console.log("Adding to cart:", product);
  };

  return (
    <Button
      type="button"
      onClick={() => addToCart(product)}
      className="w-full cursor-pointer mt-2 mb-2"
    >
      Add to Cart
    </Button>
  );
}
