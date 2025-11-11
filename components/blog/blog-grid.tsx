// // components/blog/blog-grid.tsx (Updated)

// // 🔑 REMOVE: "use client";
// import Link from "next/link";
// import { Calendar, ArrowRight } from "lucide-react";
// import Image from "next/image"; // 🔑 Import Image for optimization
// import { BlogArticle } from "@/lib/api"; // 🔑 Import data type

// // Helper function to format the date (for display consistency)
// function formatDate(dateString: string): string {
//   return new Date(dateString).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// }

// // BlogGrid now receives articles via props
// export function BlogGrid({ articles }: { articles: BlogArticle[] }) {
//   // 🔑 Static data removed, using 'articles' prop

//   console.log("articles:", articles);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {articles.map(
//         (
//           post // 🔑 Iterate over the fetched articles
//         ) => (
//           <Link
//             key={post.id}
//             href={`/blog/${post.id}`}
//             className="group flex flex-col h-full bg-secondary border border-border rounded-lg overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300"
//           >
//             {/* Image */}
//             <div className="h-48 overflow-hidden bg-muted relative">
//               <Image // 🔑 Use next/image for optimized images
//                 src={
//                   post.image ||
//                   "https://placehold.co/800x400/1e293b/fff?text=ARTICLE"
//                 }
//                 alt={post.title}
//                 fill
//                 className="object-cover group-hover:scale-110 transition-transform duration-300"
//                 sizes="(max-width: 768px) 100vw, 33vw"
//                 priority={articles.indexOf(post) < 3} // Prioritize first few for LCP
//               />
//               <div className="absolute top-4 left-4 z-10">
//                 <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
//                   {post.category}
//                 </span>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="p-6 flex-1 flex flex-col">
//               <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
//                 {post.title}
//               </h3>

//               <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-1">
//                 {post.excerpt}
//               </p>

//               {/* Meta */}
//               <div className="border-t border-border pt-4 space-y-3">
//                 <div className="flex items-center gap-2 text-foreground/60 text-sm">
//                   <Calendar className="h-4 w-4" />
//                   {/* 🔑 Use the API's date and format it */}
//                   <span>{formatDate(post.createdAt)}</span>
//                 </div>

//                 {/* Read time is still static or needs to be calculated/added to API */}
//                 <div className="flex items-center gap-2 text-foreground/60 text-sm">
//                   <span>5 min read</span>
//                 </div>

//                 <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
//                   Read Article
//                   <ArrowRight className="h-4 w-4" />
//                 </div>
//               </div>
//             </div>
//           </Link>
//         )
//       )}
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export function BlogGrid() {
  const blogPosts = [
    {
      id: "1",
      title: "The Art of Media Storytelling in Modern Communication",
      excerpt:
        "Explore how authentic storytelling shapes brand perception and audience engagement in today's multi-platform media landscape.",
      date: "December 15, 2024",
      category: "PR Strategy",
      readTime: "5 min read",
      image: "/radio.jpg",
    },
    {
      id: "2",
      title: "Building Brand Authority Through Strategic Media Relations",
      excerpt:
        "How to develop strong media relationships that amplify your message and establish thought leadership in your industry.",
      date: "December 10, 2024",
      category: "Media Relations",
      readTime: "7 min read",
      image: "/radio.jpg",
    },
    {
      id: "3",
      title: "Content Strategy That Converts: From Creation to Impact",
      excerpt:
        "A comprehensive guide to developing content strategies that resonate with audiences and drive measurable business results.",
      date: "December 5, 2024",
      category: "Content Strategy",
      readTime: "6 min read",
      image: "/radio.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.id}`}
          className="group flex flex-col h-full bg-secondary border border-border rounded-lg overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300"
        >
          {/* Image */}
          <div className="h-48 overflow-hidden bg-muted relative">
            <img
              src={
                post.image ||
                "https://placehold.co/800x400/1e293b/fff?text=ARTICLE"
              }
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/800x400/1e293b/fff?text=ARTICLE";
              }}
            />
            <div className="absolute top-4 left-4">
              <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-1">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex items-center gap-2 text-foreground/60 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center gap-2 text-foreground/60 text-sm">
                <span>{post.readTime}</span>
              </div>

              <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
