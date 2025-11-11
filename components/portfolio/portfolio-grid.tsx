"use client";
import { Play, Volume2 } from "lucide-react";
import { useState } from "react";

// PortfolioGrid now accepts the active filter from the parent
export function PortfolioGrid({ activeFilter }) {
  // State for the simulated audio player modal. Stores the item to be played.
  const [voicePlayItem, setVoicePlayItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Man Yashenfal program",
      category: "tvhost",
      image: "/man1.jpg",
      description:
        "Hosting multiple seasons of a high-engagement entertainment show on a major national network, known for charismatic interviews and audience connection.",
      link: "https://www.youtube.com/watch?v=eHq9-WE4nr0",
    },
    {
      id: 2,
      title: "Global Tech Summit MC & Keynote",
      category: "mc",
      image: "/media-work.jpg",
      description:
        "Moderating the main stage and managing transitions for a three-day international technology and investment summit with global speakers.",
      link: "https://www.youtube.com/watch?v=B_example_mc",
    },
    {
      id: 3,
      title: "Documentary Narration: 'The Omo Valley'",
      category: "voicework",
      image: "/v-1.jpeg",
      description:
        "Provided authoritative and warm narration for a critically acclaimed documentary on Ethiopian cultural heritage.",
      link: "/thank-1.mp3", // **UPDATED MP3 PATH**
    },
    {
      id: 4, // **UPDATED INTERVIEW ITEM 1**
      title: "//ፈረንጅ ጎረቤቴ// ከኔዘርላንድ አምባሳደር ጋር",
      category: "interview",
      image: "/in-1.jpg", // Using local placeholder path
      description:
        "ከኔዘርላንድ አምባሳደር ጋር የተደረገ ልዩ ቆይታ፤ 'ለመጀመሪያ ጊዜ የግመል ወተት የሞከርኩበት አጋጣሚ የማይረሳ ነው' የሚል ልብ የሚነካ ተሞክሮ ያካፈሉበት ሙሉ ፕሮግራም።",
      link: "https://www.youtube.com/watch?v=ySdGFpWtFfc",
    },
    {
      id: 5,
      title: "National Festival Opening Ceremony",
      category: "mc",
      image: "/media-work.jpg",
      description:
        "Served as the official master of ceremonies for the annual national culture and arts festival, managing government protocol and entertainment flow.",
      link: "https://www.youtube.com/watch?v=D_example_festival",
    },
    {
      id: 6,
      title: "Commercial Voiceover: Ethiopian Airlines",
      category: "voicework",
      image: "/v-1.jpeg",
      description:
        "The primary voice for a major rebranding campaign, delivering a trustworthy and memorable tone across radio and digital platforms.",
      link: "/thank-2.mp3", // **UPDATED MP3 PATH**
    },
    {
      id: 7,
      title: "Zemta yashelmal",
      category: "tvhost",
      image: "/zemta-1.jpg",
      description:
        "Moderating live, often high-stakes political panel discussions, ensuring balanced discourse and clarity for viewers.",
      link: "https://www.youtube.com/watch?v=JpSkOHxGEuo",
    },
    {
      id: 8, // **UPDATED INTERVIEW ITEM 2**
      title: "//ፈረንጅ ጎረቤቴ// 'በሕይወቴ ጥሬ ስጋ በልቼ አላውቅም...'",
      category: "interview",
      image: "/in-3.jpg", // Using local placeholder path
      description:
        "በባሕላችን ላይ በተደረገው ይህ ቃለ ምልልስ፤ እንግዳው ስለ ኢትዮጵያ ምግብ ያላቸውን አመለካከትና እንደ ጥሬ ሥጋ ያሉ ነገሮችን የመመገብ ልምዳቸውን ያልነገሩበት አስቂኝ ክፍል በኢቢኤስ።",
      link: "https://www.youtube.com/watch?v=sHxTY5Qcxqk",
    },
    {
      id: 9,
      title: "Man Yashenfal program",
      category: "tvhost",
      image: "/man-2.jpeg",
      description:
        "Hosting multiple seasons of a high-engagement entertainment show on a major national network, known for charismatic interviews and audience connection.",
      link: "https://www.youtube.com/watch?v=lsurjcL-leo",
    },
    {
      // **NEW INTERVIEW ITEM 3 ADDED**
      id: 10,
      title: "//ፈረንጅ ጎረቤቴ// 'ኢትዮጵያ መርጣኝ ነው የመጣሁት...'",
      category: "interview",
      image: "/in-4.jpg", // Using local placeholder path
      description:
        "የአገራችንን ባህልና ሕዝብ በመውደድ ላይ ያተኮረ ቃለ መጠይቅ፤ እንግዳው ኢትዮጵያ የህይወታቸው አካል መሆኗን የተናገሩበት ልዩ ውይይት በኢቢኤስ።",
      link: "https://www.youtube.com/watch?v=gZ3hSNLlHYU",
    },
  ];

  // Filtering Logic: Only show items matching the active filter, or all if 'all' is active
  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  // Simple handler for the Voice Work items (shows message box) and external links
  const handleItemClick = (item) => {
    if (item.category === "voicework") {
      // Store the item object to show the audio player modal
      setVoicePlayItem(item);
    } else {
      // Open the video link in a new tab
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
            {/* HTML5 Audio Element using the MP3 path */}
            <audio controls className="w-full mt-4">
              <source src={voicePlayItem.link} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <p className="mt-4 text-sm text-muted-foreground">
              File path from public folder:{" "}
              <code className="text-accent font-mono">
                {voicePlayItem.link}
              </code>
            </p>
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
          filteredItems.map((item) => {
            // Determine the interaction type
            const isVoiceWork = item.category === "voicework";
            const LinkComponent = isVoiceWork ? "div" : "a"; // Use <a> for external video link

            return (
              <LinkComponent
                key={item.id}
                // Set external link properties if it's a video/interview/MC item
                {...(!isVoiceWork && {
                  href: item.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default <a> behavior for internal handler
                  handleItemClick(item);
                }}
                className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-accent hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    // Fallback for image loading errors
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/600x400/222222/F4C430?text=${item.category.toUpperCase()}`;
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:scale-110 transition-transform">
                      {/* Change icon based on category */}
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
                      {item.category === "voicework"
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
