 "use client";

import Image from "next/image";
import Link from "next/link";
import { items } from "./items";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const DashboardCards = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {items.map((item) => (
        <Card key={item.title} className="w-full max-w-sm">
          <CardHeader>
            {item.img.src && (
              <Link href={item.href} className="block w-full h-48 relative">
                <Image
                  src={item.img.src}
                  alt={item.img.alt}
                  fill
                  sizes="w-full h-48"
                  loading="eager"
                  className="object-cover rounded cursor-pointer hover:opacity-80"
                />
              </Link>
            )}

            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.tagline}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p>{item.description}</p>
          </CardContent>

          <CardFooter className="flex-col gap-2 pb-2">
            <Button
              type="button"
              onClick={() => (window.location.href = item.href)}
              className="w-full cursor-pointer"
            >
              {item.btnText}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
