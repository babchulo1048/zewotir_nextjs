// app/portfolio/portfolio-content.tsx
"use client";

import { useState } from "react";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { PortfolioFilter } from "@/components/portfolio/portfolio-filter";
import { PortfolioAsset } from "@/lib/api"; // Re-use the data type

// This component is required to manage the 'activeFilter' state on the client
export function PortfolioContent({
  initialItems,
}: {
  initialItems: PortfolioAsset[];
}) {
  // 1. Lift the activeFilter state up to the nearest Client Component
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <>
      {/* Filter - Pass state and setter */}
      <PortfolioFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* Grid - Pass active filter AND the fetched data */}
      <PortfolioGrid
        activeFilter={activeFilter}
        portfolioItems={initialItems} // Pass the server-fetched data here
      />
    </>
  );
}
