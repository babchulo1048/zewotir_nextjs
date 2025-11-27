// components/portfolio/portfolio-filter.tsx (Updated for Mobile Elegance)
"use client";

import {
  LayoutGrid,
  MonitorPlay,
  Mic,
  Volume2,
  MessageSquareText,
  // Removed Palette as it's commented out in your filter list
} from "lucide-react";

interface PortfolioFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export function PortfolioFilter({
  activeFilter,
  setActiveFilter,
}: PortfolioFilterProps) {
  const filters = [
    { id: "all", label: "All Works", Icon: LayoutGrid },
    { id: "tvhost", label: "TV Hosting", Icon: MonitorPlay },
    { id: "mcing", label: "MC Events", Icon: Mic },
    { id: "voiceover", label: "Voice Work", Icon: Volume2 },
    { id: "interviews", label: "Interviews", Icon: MessageSquareText },
  ];

  return (
    // 🔑 CHANGES APPLIED HERE:
    // 1. overflow-x-auto: Enables horizontal scrolling on small screens.
    // 2. whitespace-nowrap: Prevents items from wrapping.
    // 3. custom scrollbar-hide utility: Hides the ugly scrollbar (common in professional designs).
    // 4. px-4 sm:px-0: Adds padding on the sides for mobile but removes it on wider screens (where the parent container has padding).
    <div 
      className="flex gap-3 justify-start sm:justify-center mb-16 
                 overflow-x-auto whitespace-nowrap 
                 py-1 px-4 sm:px-0 
                 scrollbar-hide" // Use a custom class to hide the scrollbar
    >
      {filters.map((filter) => {
        const Icon = filter.Icon;
        return (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            // 🔑 Added 'flex-shrink-0' to ensure buttons don't shrink when scrolling
            className={`flex-shrink-0 flex items-center px-4 py-2 text-sm rounded-full font-semibold transition-all duration-300 ${
              activeFilter === filter.id
                ? "bg-accent text-accent-foreground shadow-lg" // Elevated shadow for active
                : "bg-background text-muted-foreground border border-border hover:border-accent hover:text-foreground"
            }`}
          >
            <Icon className="w-4 h-4 mr-2" />
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

// NOTE: You will need to add the 'scrollbar-hide' utility. See instructions below.