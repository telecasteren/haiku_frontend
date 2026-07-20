import PageTitle from "@/components/PageTitle";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background pt-16 text-foreground">
      <PageTitle title="Contact Us" />

      <div className="w-full p-4 justify-items-center">
        <div className="flex md:flex-row gap-4 mb-6 justify-center items-center">
          <p><strong>Call us:</strong> 12345678</p>
          <p><strong>Opening hours:</strong> 8am - 5pm</p>
        </div>

        <p className="w-full max-w-200 text-left"><strong>Email us:</strong></p>
        <form id="form" action="/contact" method="POST" className="flex flex-col gap-4 w-full max-w-200">
          <input type="text" placeholder="Name" className="p-2 border rounded" />
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <textarea placeholder="Message here..." rows={6} className="p-2 border rounded"/>
          <button className="p-2 bg-foreground text-background rounded">Send</button>
          </form>
      </div>
    </div>
  );
}
