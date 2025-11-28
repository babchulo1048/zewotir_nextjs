// components/ui/back-to-top.tsx
"use client";

import { useScrollPosition } from "@/hooks/use-scroll-position";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const scrollY = useScrollPosition();
  // Show button after scrolling down 400px
  const isVisible = scrollY > 400; 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      // Fixed position, bottom right
      className={`fixed bottom-6 right-6 z-50 
                  p-3 bg-primary text-primary-foreground rounded-full shadow-xl 
                  transition-all duration-300 ease-in-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Back to Top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}