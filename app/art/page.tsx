// app/art/page.tsx (Refactored to be a Server Component)

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
// Renamed Lucide Image to ImageIcon to prevent conflict
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image"; // Use Next.js Image component for optimization
import { getArtGalleryAssets, ArtPiece } from "@/lib/api"; // 🔑 Import fetch function and type

// Define a safe placeholder if the image URL is missing
const PLACEHOLDER_IMAGE_URL =
  "https://placehold.co/500x500/1e293b/F4C430?text=ART+PIECE";

// 🔑 Convert to an async function to make it a Server Component
const ArtPage: React.FC = async () => {
  // 1. Server-side data fetching
  let artGallery: ArtPiece[] = [];
  try {
    artGallery = await getArtGalleryAssets();
  } catch (error) {
    console.error("Art Gallery Fetch Error:", error);
    // Render error state if API fails
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="text-center py-20 text-red-500">
          Error loading art gallery. Please check the API connection.
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 text-primary">
              Visual <span className="text-accent">Art Gallery</span>
            </h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-sans">
              A creative exploration through pencil, charcoal, and mixed media.
            </p>
          </div>

          {/* Gallery Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artGallery.map(
              (
                item,
                index // 🔑 Map over fetched data
              ) => (
                <Card
                  key={item.id} // Use the API ID as the key
                  className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all bg-card border border-border hover:border-accent"
                >
                  {/* 🔑 Image Component must have 'fill' or defined width/height */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      // 🔑 Use the fetched URL
                      src={item.imageUrl || PLACEHOLDER_IMAGE_URL}
                      alt={`Sketch art titled ${item.title} using ${item.medium}`}
                      // To maintain aspect ratio and use fill, we remove width/height props
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw" // Optimization hint
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy" // Use lazy loading for images below the fold
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ImageIcon className="w-10 h-10 text-accent" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-2 text-primary">
                      {item.title}
                    </h3>
                    {/* 🔑 Use the fetched medium */}
                    <p className="text-foreground/70 text-sm">
                      Medium: **{item.medium}**
                    </p>
                    {/* You can add a link wrap if linkUrl is present */}
                  </div>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ArtPage;
