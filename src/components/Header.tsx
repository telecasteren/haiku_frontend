import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/nav/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/nav/nav-menu-trigger-style";
import Link from "next/link";
import { LogoWithText } from "@/components/Logo";
import { User } from "lucide-react";

const dropdownItems = [
  {
    id: "shop",
    label: "Shop",
    links: [
      { href: "/shop/coffee", label: "Coffee" },
      { href: "/shop/equipment", label: "Equipment" },
      { href: "/shop/merch", label: "Merch" },
    ],
  },
  {
    id: "about",
    label: "About",
    links: [
    { href: "/blog", label: "Articles" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    id: "user",
    label: <User size={20} aria-label="Log in / Sign up" />,
    links: [
      { href: "/auth/signup", label: "Sign up" },
      { href: "/auth/login", label: "Log in" },
    ],
  },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-wrap h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-sm">
      <LogoWithText />

      <NavigationMenu>
        <NavigationMenuList>
          {/* Home is without dropdown */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {dropdownItems.map(({ id, label, links }) => (
            <NavigationMenuItem key={id}>
              <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                {links.map(({ href, label: linkLabel }) => (
                  <NavigationMenuLink key={linkLabel} href={href}>
                    {linkLabel}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
