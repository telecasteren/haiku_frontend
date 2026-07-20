import type { Metadata } from 'next'
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import { blogs } from "@/lib/mockups/blogs";


export const metadata: Metadata = {
  title: 'Articles',
}


export default function BlogList() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background pt-16 text-foreground">
      <PageTitle title="Welcome to the Articles page" className="mt-16"/>

      <div className="grid lg:grid-cols-3 gap-4 mt-12 ml-14 mr-14">
        {blogs.map((blog, index) => (
          <Link href={`/blog/${blog.id}`} key={blog.id} className="grid gap-2 mt-4 text-center">
            <div className="relative aspect-5/3 w-4/5 justify-self-center">
              <Image src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                priority={index === 0}
                className="rounded object-cover hover:brightness-75 transition duration-200" />
            </div>
              <h3 className="text-xl">{blog.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
