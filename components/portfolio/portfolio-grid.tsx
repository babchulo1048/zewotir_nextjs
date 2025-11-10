"use client";
import { Play, Volume2 } from "lucide-react";
import { useState } from "react";

// PortfolioGrid now accepts the active filter from the parent
export function PortfolioGrid({ activeFilter }) {
  // State for the simulated message box when clicking Voice Work
  const [message, setMessage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Ethiopian Prime Time TV Hosting",
      category: "tvhost",
      image: "/m-1.jpeg",
      description:
        "Hosting multiple seasons of a high-engagement entertainment show on a major national network, known for charismatic interviews and audience connection.",
      link: "https://www.youtube.com/watch?v=A_example_tvhost",
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
      image: "/omo.jpeg",
      description:
        "Provided authoritative and warm narration for a critically acclaimed documentary on Ethiopian cultural heritage.",
      link: "#", // Placeholder link for internal handling
    },
    {
      id: 4,
      title: "Celebrity Interview Series: Leaders & Innovators",
      category: "interview",
      image: "https://placehold.co/600x400/1E40AF/fff?text=INTERVIEW",
      description:
        "In-depth, thoughtful interviews with prominent regional figures on topics ranging from socio-economics to creative innovation.",
      link: "https://www.youtube.com/watch?v=C_example_interview",
    },
    {
      id: 5,
      title: "National Festival Opening Ceremony",
      category: "mc",
      image: "https://placehold.co/600x400/8B5CF6/fff?text=FESTIVAL+MC",
      description:
        "Served as the official master of ceremonies for the annual national culture and arts festival, managing government protocol and entertainment flow.",
      link: "https://www.youtube.com/watch?v=D_example_festival",
    },
    {
      id: 6,
      title: "Commercial Voiceover: Ethiopian Airlines",
      category: "voicework",
      image: "https://placehold.co/600x400/F4C430/222?text=COMMERCIAL+VO",
      description:
        "The primary voice for a major rebranding campaign, delivering a trustworthy and memorable tone across radio and digital platforms.",
      link: "#", // Placeholder link for internal handling
    },
    {
      id: 7,
      title: "Political Panel Moderation",
      category: "tvhost",
      image: "https://placehold.co/600x400/B91C1C/fff?text=POLITICAL+PANEL",
      description:
        "Moderating live, often high-stakes political panel discussions, ensuring balanced discourse and clarity for viewers.",
      link: "https://www.youtube.com/watch?v=E_example_panel",
    },
    {
      id: 8,
      title: "Digital Marketing Strategy Interview",
      category: "interview",
      image: "https://placehold.co/600x400/10B981/fff?text=MARKETING+TALK",
      description:
        "Guest on a leading business channel discussing effective media strategy in the digital age and emerging trends.",
      link: "https://www.youtube.com/watch?v=F_example_marketing",
    },
  ];

  // Filtering Logic: Only show items matching the active filter, or all if 'all' is active
  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  // Simple handler for the Voice Work items (shows message box) and external links
  const handleItemClick = (item) => {
    if (item.category === "voicework") {
      setMessage(
        `Simulating audio playback for: "${item.title}". In a real environment, an MP3 player would open here.`
      );
    } else {
      // Open the video link in a new tab
      window.open(item.link, "_blank");
    }
  };

  return (
    <>
      {/* Simulated Message Box for Voice Work */}
      {message && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
          <div className="bg-card text-card-foreground p-6 rounded-xl max-w-sm w-full shadow-2xl">
            <h3 className="text-lg font-serif font-bold text-accent mb-2">
              Audio Sample
            </h3>
            <p className="mb-4">{message}</p>
            <button
              onClick={() => setMessage(null)}
              className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors font-semibold mt-4"
            >
              Close
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
