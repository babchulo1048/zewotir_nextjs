// lib/api.ts

// 🔑 Define the Base URL. Change this to your live domain when deployed.
// For the demo, ensure your backend server is running on http://localhost:3001
// const API_BASE_URL = "http://localhost:3001/api/v1";
const API_BASE_URL = "https://zewotir-media-host-backend.onrender.com/api/v1";

// 🔑 Define the Data Structure (Mapping API fields to Component fields)
export type PortfolioAsset = {
  id: number;
  title: string;
  category: string; // Mapped from asset_type
  image: string; // Mapped from thumbnail_url
  description: string;
  link: string; // Mapped from link_url
};

// 🔑 The Server-Side Fetch Function
export async function getPortfolioAssets(): Promise<PortfolioAsset[]> {
  const endpoint = `${API_BASE_URL}/portfolio/assets`;

  // Use Next.js's native fetch. It automatically deduplicates, caches,
  // and throws errors for non-200 responses.
  const res = await fetch(endpoint, {
    // 💡 Optional: If data is updated frequently, use revalidate for caching
    // next: { revalidate: 60 * 60 } // Revalidate every hour
    cache: "no-store", // Use this during development with localhost to always get fresh data
  });

  if (!res.ok) {
    // Standard and robust error handling
    throw new Error(
      `Failed to fetch portfolio assets from API: ${res.statusText}`
    );
  }

  // 💡 Transform the API response keys to match your existing component structure
  // (category, image, link) for minimal downstream changes.
  const apiAssets = await res.json();

  const mappedAssets: PortfolioAsset[] = apiAssets.map((asset: any) => ({
    id: asset.id,
    title: asset.title,
    description: asset.description,
    category: asset.asset_type, // asset_type -> category
    image: asset.thumbnail_url, // thumbnail_url -> image
    link: asset.link_url, // link_url -> link
  }));

  return mappedAssets;
}

// 🔑 New Blog Asset Type
// export type BlogArticle = {
//   id: number; // API uses number
//   title: string;
//   excerpt: string;
//   category: string;
//   content: string; // The HTML content
//   image: string | null; // Mapped from featured_image_url
//   createdAt: string; // Mapped from created_at
// };

// // 🔑 New Blog List Fetch Function
// export async function getBlogArticles(): Promise<BlogArticle[]> {
//   const endpoint = `${API_BASE_URL}/blog/articles`;

//   const res = await fetch(endpoint, {
//     // 💡 Always use this for data that changes
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error(
//       `Failed to fetch blog articles from API: ${res.statusText}`
//     );
//   }

//   const apiArticles = await res.json();

//   // Transform the API response keys
//   const mappedArticles: BlogArticle[] = apiArticles.map((article: any) => ({
//     id: article.id,
//     title: article.title,
//     excerpt: article.excerpt,
//     category: article.category,
//     content: article.content,
//     image: article.featured_image_url, // featured_image_url -> image
//     createdAt: article.created_at, // created_at -> createdAt
//   }));

//   return mappedArticles;
// }

// // 🔑 New Single Blog Article Fetch Function
// export async function getSingleBlogArticle(
//   id: string | number
// ): Promise<BlogArticle | null> {
//   const endpoint = `${API_BASE_URL}/blog/articles/${id}`;

//   // Note: If your API does not have a /articles/:id endpoint,
//   // you would fetch all and filter here (less efficient).
//   // Assuming you have an API endpoint for a single article.

//   const res = await fetch(endpoint, { cache: "no-store" });

//   console.log("res:", res);

//   if (res.status === 404) {
//     return null; // Article not found
//   }
//   if (!res.ok) {
//     throw new Error(`Failed to fetch blog article ID ${id}: ${res.statusText}`);
//   }

//   const article = await res.json();

//   // Map and return the single asset
//   return {
//     id: article.id,
//     title: article.title,
//     excerpt: article.excerpt,
//     category: article.category,
//     content: article.content,
//     image: article.featured_image_url,
//     createdAt: article.created_at,
//   } as BlogArticle;
// }

// 🔑 Define the Art Piece Data Structure (simplified for the Art Page)
export type ArtPiece = {
  id: number;
  title: string;
  description: string;
  linkUrl: string | null; // Mapped from link_url
  imageUrl: string; // Mapped from thumbnail_url
  medium: string; // Extracted from 'details.medium' or defaulted
};

// 🔑 New Art Gallery Fetch Function
export async function getArtGalleryAssets(): Promise<ArtPiece[]> {
  const endpoint = `${API_BASE_URL}/portfolio/assets/art`;

  const res = await fetch(endpoint, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch art gallery assets from API: ${res.statusText}`
    );
  }

  const apiAssets = await res.json();

  // Transform the API response keys and extract 'medium' from 'details'
  const mappedAssets: ArtPiece[] = apiAssets.map((asset: any) => ({
    id: asset.id,
    title: asset.title,
    description: asset.description,
    linkUrl: asset.link_url,
    imageUrl: asset.thumbnail_url,
    // Attempt to get 'medium' from details, otherwise use a placeholder
    medium: asset.details?.medium || "Mixed Media",
  }));

  return mappedAssets;
}
