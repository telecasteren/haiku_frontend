import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import PageTitle from "@/components/layout/PageTitle";
import AddToCartBtn from "@/components/AddToCartBtn";
import { ShopItems } from "@/services/mockups/shop";
import { ArrowLeft } from "lucide-react";
import ProductRating from "@/components/products/ProductRating";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = ShopItems.find((b) => b.slug === slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = slug ? ShopItems.find((b) => b.slug === slug) : undefined;
  const onSale = product?.onSale && product.onSale === true;
  const reviews = product?.reviews ?? [];

  if (!product) {
    return (
      <div className="mx-auto flex gap-4 min-h-screen w-full max-w-3xl flex-col px-6 pb-20 pt-28 items-center">
        <PageTitle
          title="Not found, check the URL."
          className="mx-auto bg-brand-200 p-4 rounded-lg"
        />
        <Link
          href="/shop"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-brand-50 hover:scale-95 transition duration-200"
        >
          <ArrowLeft />
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <section
      aria-label="Product details"
      className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-20 text-foreground"
    >
      <header className="space-y-5">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70">
          {product.type} • Product #{product.id}
        </p>
        <PageTitle title={product.title} className="mx-auto text-center" />
      </header>

      <div className="grid grid-cols-2 gap-6 mt-10 overflow-hidden rounded-xl bg-muted/20">
        {product.image && (
          <Image
            src={product.image}
            alt={product.title}
            width={800}
            height={400}
            className="h-auto w-full object-cover"
            priority
            loading="eager"
          />
        )}
        <div className="flex flex-col gap-2 text-base leading-8 text-foreground/90 md:text-lg">
          <h2 className="font-semibold">{product.title}</h2>
          <ProductRating reviews={reviews} />
          <p>{product.description}</p>

          {onSale ? (
            <div>
              <p className="font-semibold text-sm text-red-500">
                Discounted price: ${product.salesPrice}
              </p>
              <p className="text-xs text-muted-foreground">
                <s>Original price: ${product.price}</s>
              </p>
            </div>
          ) : (
            <p className="font-semibold text-sm">Price: ${product.price}</p>
          )}

          <AddToCartBtn product={product} />
        </div>
      </div>

      {reviews.length > 0 && (
        <div id="reviews" className="mt-10 md:mt-20">
          <h3 className="font-semibold text-xl mb-2">Reviews</h3>

          <hr />

          <div className="flex flex-col gap-4 mt-6">
            {reviews.map((review) => (
              <div key={review.id}>
                <p className="font-semibold">{review.title}</p>
                <p>{review.content}</p>
                {/*<p>{review.author}</p>*/}
                <p className="text-xs text-muted-foreground">
                  {review.createdAt}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
