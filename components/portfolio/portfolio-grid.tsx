// components/portfolio/portfolio-grid.tsx (Updated)
"use client";
import { Play, Volume2 } from "lucide-react";
import { useState } from "react";
// 🔑 Import next/image for fast, optimized images
import Image from "next/image";
import { PortfolioAsset } from "@/lib/api"; // Re-use the data type

// PortfolioGrid now accepts the active filter and the portfolio data
export function PortfolioGrid({
  activeFilter,
  portfolioItems,
}: {
  activeFilter: string;
  portfolioItems: PortfolioAsset[];
}) {
  const [voicePlayItem, setVoicePlayItem] = useState<PortfolioAsset | null>(
    null
  );

  // Filtering Logic: Only show items matching the active filter, or all if 'all' is active
  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  // Simple handler for the Voice Work items (shows message box) and external links
  const handleItemClick = (item: PortfolioAsset) => {
    // 🔑 Use the new 'voiceover' category ID
    if (item.category === "voiceover") {
      // Store the item object to show the audio player modal
      setVoicePlayItem(item);
    } else if (item.link) {
      // Open the video link in a new tab (only if link_url is not null)
      window.open(item.link, "_blank");
    }
  };

  return (
    <>
      {/* Actual Audio Player Modal for Voice Work */}
      {voicePlayItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
          <div className="bg-card text-card-foreground p-6 rounded-xl max-w-sm w-full shadow-2xl">
            <h3 className="text-lg font-serif font-bold text-accent mb-2">
              Audio Sample: {voicePlayItem.title}
            </h3>
            {/* HTML5 Audio Element uses the Cloudinary MP3 path (item.link) */}
            <audio controls className="w-full mt-4">
              <source src={voicePlayItem.link} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            {/* <p className="mt-4 text-sm text-muted-foreground">
              Source URL:{" "}
              <code className="text-accent font-mono break-all">
                {voicePlayItem.link}
              </code>
            </p> */}
            <button
              onClick={() => setVoicePlayItem(null)}
              className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors font-semibold mt-4"
            >
              Close Player
            </button>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length === 0 ? (
          <p className="col-span-full text-center text-lg text-muted-foreground py-10">
            No items found for the selected category.
          </p>
        ) : (
          filteredItems.map((item, index) => {
            // 🔑 Use the new 'voiceover' category ID
            const isVoiceWork = item.category === "voiceover";
            const LinkComponent = isVoiceWork ? "div" : "a";

            return (
              <LinkComponent
                key={item.id}
                {...(!isVoiceWork &&
                  item.link && {
                    // Ensure item.link exists before using <a>
                    href: item.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item);
                }}
                className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-accent hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image // 🔑 Using next/image for performance
                    src={item.image} // item.image is now the Cloudinary URL
                    alt={item.title}
                    fill // Fills the parent <div>
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3} // Prioritize first 3 images for initial load speed
                    onError={(e) => {
                      // Fallback logic for image loading errors
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:scale-110 transition-transform">
                      {isVoiceWork ? (
                        <Volume2 className="h-7 w-7" />
                      ) : (
                        <Play className="h-7 w-7 ml-1" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="inline-block mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {/* Clean up the category display name */}
                      {item.category === "voiceover"
                        ? "Voice Work"
                        : item.category.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </LinkComponent>
            );
          })
        )}
      </div>
    </>
  );
}
