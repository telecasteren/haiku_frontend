import PageTitle from "@/components/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
};

export default function AccountPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background pt-16 text-foreground">
      <PageTitle title="Your Account" />
    </div>
  );
}
