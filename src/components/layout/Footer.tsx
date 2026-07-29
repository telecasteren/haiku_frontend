import { brand } from "@/lib/data/brand";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-wrap gap-4 justify-between p-10 pt-15 pb-15 border-t items-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} Haiku Coffee. All rights reserved.
      </p>

      <div className="flex flex-col gap-2">
        <Link href="/account" className="hover:underline">
          Account
        </Link>
        <Link href="/about" className="hover:underline">
          About Us
        </Link>
        <Link href="/about#work-with-us" className="hover:underline">
          Work with us
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <Link href="/transparency" className="hover:underline">
          Transparency
        </Link>
        <Link href="/terms" className="hover:underline">
          Terms of Service
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>

      <span>{brand.LogoWithText()}</span>
    </footer>
  );
}
