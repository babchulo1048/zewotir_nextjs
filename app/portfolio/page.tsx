"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { PortfolioFilter } from "@/components/portfolio/portfolio-filter";

export default function PortfolioPage() {
  // 1. Lift the activeFilter state up to the parent component
  const [activeFilter, setActiveFilter] = useState("all");

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

          {/* Filter - Pass state and setter */}
          <PortfolioFilter
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          {/* Grid - Pass active filter so it knows what to display */}
          <PortfolioGrid activeFilter={activeFilter} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
