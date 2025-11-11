// app/portfolio/page.tsx (Refactored to be a Server Component)

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// Import the Server-Side fetch function
import { getPortfolioAssets, PortfolioAsset } from "@/lib/api";
// Import the new Client Component wrapper
import { PortfolioContent } from "./portfolio-content";

export default async function PortfolioPage() {
  // 🔑 1. Await the data fetch here. This runs ONLY on the server.
  // The client receives the fully rendered HTML with the data baked in.
  let portfolioItems: PortfolioAsset[] = [];
  try {
    portfolioItems = await getPortfolioAssets();
  } catch (error) {
    console.error(error);
    // You can implement better error UI here for the client
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="text-center py-20">
          <h2 className="text-2xl text-red-500">Error loading portfolio.</h2>
          <p className="text-muted-foreground">
            Please check the API connection (http://localhost:3001).
          </p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-4sxl font-serif font-bold text-primary mb-4">
              Portfolio & <span className="accent-text">Works</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore a curated collection of my media hosting, MC events, and
              voice work across diverse platforms and audiences.
            </p>
          </div>

          {/* 🔑 2. Pass the fetched data to the Client Component for filtering/interactivity */}
          <PortfolioContent initialItems={portfolioItems} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
