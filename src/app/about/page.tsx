import type { Metadata } from 'next'
import PageTitle from "@/components/PageTitle";
import Hero from '@/components/Hero';
import { brand } from "@/lib/data/brand";
import { aboutSection } from "@/lib/data/about-text"
import { Coffee } from "lucide-react";



export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 mb-20 bg-background text-foreground">
      <Hero src="/ruben-ramirez-xhKG01FN2uk-unsplash.jpg" alt="Inside the Coffee Shop" />
      <PageTitle title="About us" />

      <div className="mt-20">
        <div aria-label="About us navigation" className="flex gap-4 text-brand-900">
          {aboutSection.map((section) => (
            <div key={section.id} className="p-10 rounded bg-brand-50 hover:bg-brand-100 cursor-pointer"><a href={`/about#${section.id}`}>{section.navLabel}</a></div>
          ))}
        </div>
      </div>

      {aboutSection && (
        aboutSection.map((section) => (
          <div key={section.id}  id={section.id} aria-label={section.title} className="max-w-200 grid gap-2 mt-10">
            <h2 className="font-bold">{section.title}</h2>
            <p>{section.content}</p>
            <p>{section.subtext}</p>
          </div>
        ))
      )}

      <p className="text-sm text-brand-900 font-semibold mt-20 justify-self-end inline-flex items-center gap-1">
        Yours truly, {brand.name}
        <Coffee className="inline" width={18} height={18} />
      </p>

    </div>
  );
}
