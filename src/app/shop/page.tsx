import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/components/layout/PageTitle";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background pt-16 text-foreground">
      <PageTitle title="Welcome to the Shop" />

      <Link href="/shop/coffee/" className="hover:underline">
        Shop Beans
      </Link>
      <Link href="/shop/equipment/" className="hover:underline">
        Shop Equipment
      </Link>
      <Link href="/shop/merch/" className="hover:underline">
        Shop Merch
      </Link>
    </div>
  );
}
