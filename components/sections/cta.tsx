import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-accent-foreground mb-6">Ready to Elevate Your Story?</h2>

        <p className="text-lg text-accent-foreground/90 mb-8 leading-relaxed">
          Let's collaborate to create compelling media narratives that resonate with your audience and drive meaningful
          impact.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-accent-foreground text-accent px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Get in Touch Now
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
