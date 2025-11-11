"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
// 1. IMPORT usePathname
import { usePathname } from "next/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // 2. GET THE CURRENT PATH
  const currentPath = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  // Define the styling classes for active and default states
  // Desktop Styles
  const defaultClass =
    "text-foreground hover:text-accent transition-colors text-sm font-sm";
  const activeClass =
    "text-accent font-semibold border-b-2 border-accent transition-colors text-sm font-sm";

  // Mobile Styles
  const mobileActiveClass =
    "block px-4 py-2 bg-secondary text-accent rounded font-semibold";
  const mobileDefaultClass =
    "block px-4 py-2 text-foreground hover:bg-secondary/50 rounded";

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-semibold text-accent">Zewotir</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              // 3. CHECK IF THE LINK IS ACTIVE
              const isActive = currentPath === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  // 4. APPLY CONDITIONAL STYLING
                  className={isActive ? activeClass : defaultClass}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-6 py-2 font-sm hover:shadow-glow transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => {
              // 5. CHECK ACTIVE STATE FOR MOBILE LINKS
              const isActive = currentPath === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  // 6. APPLY CONDITIONAL MOBILE STYLING
                  className={isActive ? mobileActiveClass : mobileDefaultClass}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="block px-4 py-2 bg-accent text-accent-foreground rounded font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
