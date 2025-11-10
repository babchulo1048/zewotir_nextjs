import Link from "next/link";
// Import the necessary Lucide icons
import { ArrowRight, MonitorPlay, BookOpen, Palette } from "lucide-react";

export function ContentPreview() {
  const portfolioItems = [
    {
      // Updated icon to Lucide MonitorPlay
      icon: MonitorPlay,
      title: "Portfolio / Works",
      description:
        "Showcase of my best media hosting, MC events, and voice work.",
      href: "/portfolio",
    },
    {
      // Updated icon to Lucide BookOpen (for Blog/Insights)
      icon: BookOpen,
      title: "Blog / Insights",
      description:
        "Reflections on PR strategy, media, communication, and growth.",
      href: "/blog",
    },
    {
      // Updated icon to Lucide Palette (for Sketch Art Gallery)
      icon: Palette,
      title: "Sketch Art Gallery",
      description:
        "A clean grid gallery of personal art—adding warmth and personality.",
      href: "/portfolio",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => {
            // Destructure the Icon component from the item
            const ItemIcon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group p-8 bg-background border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all"
              >
                {/* Render the Lucide Icon component */}
                <div className="text-4xl mb-4 text-accent">
                  <ItemIcon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-2 text-accent font-semibold">
                  Explore Now
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
