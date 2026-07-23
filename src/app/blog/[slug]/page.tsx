import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { blogs } from "@/lib/mockups/blogs";
import PageTitle from "@/components/PageTitle";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog post not found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = slug ? blogs.find((b) => b.slug === slug) : undefined;
  const formattedDate = blog ? formatDate(blog.date) : undefined;

  if (!blog) {
    return (
      <div className="mx-auto flex gap-4 min-h-screen w-full max-w-3xl flex-col px-6 pb-20 pt-28 items-center">
        <PageTitle title="Not found, check the URL." className="mx-auto bg-brand-200 p-4 rounded-lg" />
        <Link href="/blog" className="flex items-center gap-2 p-2 rounded-lg hover:bg-brand-50 hover:scale-95 transition duration-200"><ArrowLeft/>Go to Articles</Link>
      </div>
    );
  }

  return (
    <article className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 pb-20 pt-20 text-foreground">
      <header className="space-y-5">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70">
          {blog.category} • Article #{blog.id}
        </p>

        <PageTitle title={blog.title} className="mx-auto text-center" />

        <p className="mx-auto max-w-2xl text-center text-md leading-relaxed text-foreground/80">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-foreground/70">
          <span>{formattedDate}</span>
          <span aria-hidden>•</span>
          <span>By {blog.author}</span>
        </div>
      </header>

      <div className="mt-10 overflow-hidden rounded-xl bg-muted/20">
        <Image
          src={blog.image}
          alt={blog.title}
          width={1200}
          height={700}
          className="h-auto w-full object-cover"
          priority
          loading="eager"
        />
      </div>

      <section className="mt-5 p-6 md:p-8">
        <p className="text-base leading-8 text-foreground/90 md:text-lg">{blog.content}</p>
      </section>
    </article>
  );
}
