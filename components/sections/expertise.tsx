import { Mic, Globe, Pen, Video } from "lucide-react"

export function Expertise() {
  const expertise = [
    {
      icon: Mic,
      title: "Media Relations",
      description: "Strategic media outreach and relationship building to amplify your message across all channels.",
    },
    {
      icon: Globe,
      title: "Brand Strategy",
      description: "Comprehensive brand positioning and communication strategies that resonate with target audiences.",
    },
    {
      icon: Pen,
      title: "Content Creation",
      description: "Compelling storytelling and content development across media platforms for maximum impact.",
    },
    {
      icon: Video,
      title: "Media Production",
      description: "Expert hosting, production coordination, and media personality services for broadcast and digital.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary text-center mb-16">Areas of Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="p-8 border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all"
              >
                <Icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
