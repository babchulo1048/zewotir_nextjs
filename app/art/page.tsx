// app/art/page.tsx

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// Assuming these are available from your Shadcn/UI setup
import { Card } from "@/components/ui/card";
// Renamed Lucide Image to ImageIcon to prevent conflict
import { Image as ImageIcon, Palette } from "lucide-react";
import Image from "next/image"; // Use Next.js Image component for optimization

// Mock image paths since the actual assets are not available here
const PLACEHOLDER_IMAGE_URL = "/images/art-placeholder.jpg"; // Replace with your actual path structure

interface ArtPiece {
  title: string;
  medium: string;
  image: string;
}

const artGallery: ArtPiece[] = [
  {
    title: "Portrait Series I",
    medium: "Charcoal",
    image: "/sketch-1.jpg",
  },
  {
    title: "Landscape Collection",
    medium: "Pencil",
    image: "/sketch-2.jpg",
  },
  {
    title: "Abstract Expressions",
    medium: "Mixed Media",
    image: "/sketch-3.jpg",
  },

  // Add more art pieces here
];

const ArtPage: React.FC = () => {
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
              (This page is now separate from the main professional portfolio)
            </p>
          </div>

          {/* Gallery Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artGallery.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all bg-card border border-border hover:border-accent"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Sketch art titled ${item.title} using ${item.medium}`}
                    // Adjust width/height as needed. Using fill requires parent to be relative
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {/* Updated to use ImageIcon */}
                    <ImageIcon className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Medium: {item.medium}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ArtPage;
