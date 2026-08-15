import Link from "next/link";
import { cookies } from "next/headers";
import { verifySession } from "@/lib/auth/session";
import { LogoWithText } from "@/components/LogoWithText";
import { navigationMenuTriggerStyle } from "@/components/ui/nav/nav-menu-trigger-style";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/nav/navigation-menu";
import { User } from "lucide-react";
import { LogoutButton } from "@/components/LogoutButton";

const shopItem = {
  id: "shop",
  label: "Shop",
  links: [
    { href: "/shop/coffee", label: "Coffee" },
    { href: "/shop/equipment", label: "Equipment" },
    { href: "/shop/merch", label: "Merch" },
  ],
};

const aboutItem = {
  id: "about",
  label: "About",
  links: [
    { href: "/blog", label: "Articles" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};
const dropdownItems = [shopItem, aboutItem];

export default async function Header() {
  const cookieStore = await cookies();
  const session = await verifySession(cookieStore.get("session")?.value ?? "");
  const isLoggedIn = session !== null;

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

          {isLoggedIn ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger aria-label="Account">
                <User size={20} aria-hidden />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/account">Account</NavigationMenuLink>
                <LogoutButton aria-label="Log out" />
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem>
              <NavigationMenuTrigger aria-label="Log in / Sign up">
                <User size={20} aria-hidden />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/login">Log in</NavigationMenuLink>
                <NavigationMenuLink href="/signup">Sign up</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
