import PageTitle from "@/components/PageTitle";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '...',
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background pt-16 text-foreground">
      <PageTitle title="Welcome to the Articles page" />
    </div>
  );
}
