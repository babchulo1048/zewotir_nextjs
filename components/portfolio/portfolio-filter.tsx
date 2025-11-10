"use client";

// Imported new icons - Replaced Paintbrush with MessageSquareText
import {
  LayoutGrid,
  MonitorPlay,
  Mic,
  Volume2,
  MessageSquareText,
} from "lucide-react";

// Component now accepts activeFilter state and the setter function as props
export function PortfolioFilter({ activeFilter, setActiveFilter }) {
  const filters = [
    // Added an 'Icon' property to each filter object
    { id: "all", label: "All Works", Icon: LayoutGrid },
    { id: "tvhost", label: "TV Hosting", Icon: MonitorPlay },
    { id: "mc", label: "MC Events", Icon: Mic },
    { id: "voicework", label: "Voice Work", Icon: Volume2 },
    // Updated from 'Art Gallery' to 'Interviews'
    { id: "interview", label: "Interviews", Icon: MessageSquareText },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-16">
      {filters.map((filter) => {
        const Icon = filter.Icon; // Destructure the Icon component
        return (
          <button
            key={filter.id}
            // Uses the setter passed from parent
            onClick={() => setActiveFilter(filter.id)}
            // Added flex and items-center for proper icon alignment
            className={`flex items-center px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeFilter === filter.id
                ? "bg-accent text-accent-foreground shadow-md"
                : "bg-transparent text-muted-foreground border border-border hover:border-accent hover:text-foreground"
            }`}
          >
            {/* Render the icon to the left of the label */}
            <Icon className="w-4 h-4 mr-2" />
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
