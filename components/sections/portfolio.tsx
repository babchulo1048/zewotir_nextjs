import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Portfolio() {
  const portfolioItems = [
    {
      icon: "📺",
      title: "Portfolio / Works",
      description: "Showcase of my best media hosting, MC events, and voice work.",
      href: "/portfolio",
    },
    {
      icon: "✍️",
      title: "Blog / Insights",
      description: "Reflections on PR strategy, media, communication, and growth.",
      href: "/blog",
    },
    {
      icon: "🎨",
      title: "Sketch Art Gallery",
      description: "A clean grid gallery of personal art—adding warmth and personality.",
      href: "/portfolio",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group p-8 bg-background border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">{item.description}</p>
              <div className="inline-flex items-center gap-2 text-accent font-semibold">
                Explore Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
