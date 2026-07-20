import PageTitle from "@/components/PageTitle";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events',
}

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background pt-16 text-foreground">
      <PageTitle title="Welcome to the Events" />
    </div>
  );
}
