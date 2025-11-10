import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Adjusted grid to 3/5 and 2/5 for minimizing the right side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Content - Takes up 3/5 of the space on large screens */}
          <div className="space-y-8 lg:col-span-3">
            <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold">
              MEDIA PROFESSIONAL
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold text-primary leading-tight">
              Zewotir D. Alemu
            </h1>

            {/* Increased font size: text-xl -> text-2xl */}
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80">
              Ethiopian PR Strategist, TV Host & Media Personality
            </p>

            {/* Increased font size: text-lg -> text-xl */}
            <p className="text-md sm:text-xl text-foreground/70 leading-relaxed">
              Strategic Communications & Media Expertise for Lasting Impact. I
              help organizations raise their media visibility and tell
              compelling stories that connect with audiences, strengthen brand
              reputation, and inspire meaningful engagement across media
              platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                <span>Watch My Work</span>
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-foreground/20 text-foreground px-8 py-3 rounded-full font-semibold hover:border-accent hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Let's Work Together</span>
              </Link>
            </div>
          </div>

          {/* Right Image - Takes up 2/5 of the space on large screens */}
          <div className="relative lg:col-span-2">
            <div className="bg-secondary rounded-2xl p-8 shadow-lg">
              <img
                src="/z-2.png"
                alt="Zewoti Ralemu - Media Professional"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
