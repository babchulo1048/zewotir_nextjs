import Link from "next/link"

export function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
          A Storyteller <span className="text-accent">In Every Medium</span>
        </h2>

        <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed">
          With over a decade of experience, I am a versatile professional who creates meaningful connections through
          strategic communication and authentic artistic expression.
        </p>

        <Link
          href="/about"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Read My Full Biography
          <span>→</span>
        </Link>
      </div>
    </section>
  )
}
