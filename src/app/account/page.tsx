import type { Metadata } from "next";
import { requireAuth } from "@/lib/helpers/requireAuth";
import PageTitle from "@/components/layout/PageTitle";

export const metadata: Metadata = {
  title: "Account",
};

export default async function AccountPage() {
  const user = await requireAuth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background pt-16 text-foreground">
      <PageTitle title="Your Account" />
      <p>Welcome, {user.name}!</p>
    </div>
  );
}
