"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { cn as _cn } from "@/lib/utils";
import Logo from "./Logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Wellness Retreats", href: "/retreats/wellness" },
  { name: "Corporate Retreats", href: "/retreats/corporate" },
  { name: "Community Tours", href: "/tours/community" },
  { name: "MICE Tours", href: "/tours/mice" },
  { name: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[80px] border-b bg-background/30 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      {/* Inner wrapper: full width with padding */}
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo height={60} width={60} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={_cn(
                  "text-sm font-medium transition-smooth hover:text-primary relative",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                  active ? "text-primary after:scale-x-100" : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button (Desktop only) */}
        <div className="hidden md:flex">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">Plan Your Retreat</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background mt-[80px]">
          <nav className="px-4 sm:px-6 py-4 space-y-3">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={_cn(
                    "block py-2 text-sm font-medium transition-smooth",
                    active ? "text-primary" : "text-foreground hover:text-primary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* CTA in mobile menu */}
            <div className="pt-4">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link href="/contact">Plan Your Retreat</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
