import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog/blog-grid"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4">Latest Insights & Articles</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Reflections on PR strategy, media, communication, and growth. Insights from my decade of experience in
              media and communications.
            </p>
          </div>

          {/* Blog Grid */}
          <BlogGrid />
        </div>
      </section>

      <Footer />
    </main>
  )
}
