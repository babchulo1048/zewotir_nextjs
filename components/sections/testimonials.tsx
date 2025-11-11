import Link from "next/link";
import { Quote, ChevronRight } from "lucide-react";

export function Testimonials() {
  const testimonialData = [
    {
      quote:
        "Zewotir is not just a host; he's a strategic communicator who deeply understands audience engagement. A true professional.",
      name: "Dr. Elias K.",
      title: "Media Producer, EBS",
      logoUrl: "/ebs.jpeg",
      logoAlt: "EBS logo placeholder",
    },
    {
      quote:
        "His voice work elevated our corporate campaign. Authority, warmth, and clarity—all delivered flawlessly.",
      name: "Aisha M.",
      title: "Marketing Director, Global Tech",
      logoUrl: "/global.jpeg",
      logoAlt: "Global Tech logo placeholder",
    },
    {
      quote:
        "His preparation was meticulous, and his ability to steer a complex conversation with grace and insight created a genuinely engaging dialogue. A true master of media interaction.",
      name: "H.E. Ambassador [Name]",
      title: "Ambassador of the Republic of [Country Name]",
      logoUrl: "demo1.png",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">
            Testmonials
          </h2>
          {/* Using a simple accent color for the divider line */}
          <div className="w-20 h-1 bg-accent mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialData.map((t, index) => (
            // Added 'group' class to the card for hover effects on the logo wrapper
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:border-accent hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              // style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Logo Section */}
              <div className="flex justify-center mb-6">
                {/* New Logo Wrapper: w-24 h-24 (larger), rounded-full (circular), 
                  and overflow-hidden (clips the image to the circle).
                  Added border for emphasis and a hover effect.
                */}
                <div className="w-24 h-24 rounded-full overflow-hidden  transition-colors">
                  <img
                    src={t.logoUrl}
                    alt={t.logoAlt}
                    // Image fills the container (w-full h-full) and uses object-cover to prevent stretching
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    // onError={(e) => {
                    //   e.target.style.display = "none";
                    //   console.error("Image failed to load");
                    // }}
                  />
                </div>
              </div>

              <Quote className="w-8 h-8 text-accent mb-4" />
              <blockquote className="text-lg italic font-serif text-foreground mb-6 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div className="text-right mt-auto">
                <p className="font-bold text-primary text-base">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-16">
          <Link
            href="/testimonials"
            className="text-accent font-semibold hover:text-primary transition-colors flex items-center justify-center group"
          >
            View All Endorsements
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
