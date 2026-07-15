"use client";

import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/lib/mockups/blogs";  // will move to API later

export default function LatestBlogsList() {
  return (
    <div className="grid gap-4">
      <h2 className="text-2xl mb-2">Latest blog articles</h2>

        <div className="flex gap-4">
          <div className="flex-1">
            <div className="flex flex-col gap-12">
              {blogs.map((blog, index) => (
                <div key={blog.id} className="flex-1">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link href={`/blog/${blog.id}`} className="relative aspect-5/3 block w-4/5">
                      <Image src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        priority={index === 0}
                        className="rounded object-cover hover:brightness-75 transition duration-200" />
                    </Link>
                    <div className="flex flex-col gap-2">
                      <Link href={`/blog/${blog.id}`}><h3 className="text-xl">{blog.title}</h3></Link>
                        <p>{blog.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="/blog"
          className="font-semibold underline! hover:no-underline! w-fit"
        >
          See all articles
        </Link>

    </div>
  );
}
