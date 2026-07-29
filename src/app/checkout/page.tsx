import PageTitle from "@/components/layout/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background pt-16 text-foreground">
      <PageTitle title="Checkout" />
    </div>
  );
}
