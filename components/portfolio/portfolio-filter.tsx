// components/portfolio/portfolio-filter.tsx (Updated)
"use client";

import {
  LayoutGrid,
  MonitorPlay,
  Mic,
  Volume2,
  MessageSquareText,
  Palette, // Assuming you might want to use 'art'
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
    // 🔑 Mapped 'mc' to API's 'mcing'
    { id: "mcing", label: "MC Events", Icon: Mic },
    // 🔑 Mapped 'voicework' to API's 'voiceover'
    { id: "voiceover", label: "Voice Work", Icon: Volume2 },
    // 🔑 Mapped 'interview' to API's 'interviews'
    { id: "interviews", label: "Interviews", Icon: MessageSquareText },
    // You can add more categories like 'art' and 'media' if needed:
    // { id: "art", label: "Art", Icon: Palette },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-16">
      {filters.map((filter) => {
        const Icon = filter.Icon;
        return (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeFilter === filter.id
                ? "bg-accent text-accent-foreground shadow-md"
                : "bg-transparent text-muted-foreground border border-border hover:border-accent hover:text-foreground"
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
