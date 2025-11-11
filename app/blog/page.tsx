import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogGrid } from "@/components/blog/blog-grid";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-4xl font-bold text-primary mb-4 font-serif">
              Latest Insights & <span className="accent-text"> Articles</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Reflections on PR strategy, media, communication, and growth.
              Insights from my decade of experience in media and communications.
            </p>
          </div>

          {/* Blog Grid */}
          <BlogGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
}
