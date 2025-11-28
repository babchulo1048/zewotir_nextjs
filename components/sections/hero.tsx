// import Link from "next/link";
// import { ArrowRight, Mail } from "lucide-react";

// export function Hero() {
//   return (
//     <section className="py-10 px-4 sm:px-6 lg:px-8 lg:bg-radial-hero-glow">
//       <div className="max-w-7xl mx-auto">
//         {/* Adjusted grid to 3/5 and 2/5 for minimizing the right side */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
//           {/* Left Content - Takes up 3/5 of the space on large screens */}
//           <div className="space-y-8 lg:col-span-3">
//             <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold">
//               MEDIA PROFESSIONAL
//             </div>

//             <h1 className="text-4xl sm:text-6xl font-bold text-primary leading-tight">
//               Zewotir D. Alemu
//             </h1>

//             {/* Increased font size: text-xl -> text-2xl */}
//             <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80">
//               Ethiopian PR Strategist, TV Host & Media Personality
//             </p>

//             {/* Increased font size: text-lg -> text-xl */}
//             <p className="text-md sm:text-xl text-foreground/70 leading-relaxed">
//               Strategic Communications & Media Expertise for Lasting Impact. I
//               help organizations raise their media visibility and tell
//               compelling stories that connect with audiences, strengthen brand
//               reputation, and inspire meaningful engagement across media
//               platforms.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 href="/portfolio"
//                 className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
//               >
//                 <span>Watch My Work</span>
//                 <ArrowRight className="h-5 w-5" />
//               </Link>

//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center gap-2 border-2 border-foreground/20 text-foreground px-8 py-3 rounded-full font-semibold hover:border-accent hover:text-accent transition-colors"
//               >
//                 <Mail className="h-5 w-5" />
//                 <span>Let's Work Together</span>
//               </Link>
//             </div>
//           </div>

//           {/* Right Image - Takes up 2/5 of the space on large screens */}
//           <div className="relative lg:col-span-2">
//             <div className="bg-secondary rounded-2xl p-8 shadow-lg">
//               <img
//                 src="/z-2.png"
//                 alt="Zewoti Ralemu - Media Professional"
//                 className="rounded-lg w-full h-auto"
//               />
//             </div>
//             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// // components/sections/hero.tsx (Final update for Point 1)

// import Link from "next/link";
// import { ArrowRight, Mail } from "lucide-react";

// export function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-white to-yellow-50 overflow-hidden">
//       {/* Large subtle background elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           <div className="lg:col-span-7 space-y-10">
//             <div className="inline-block bg-yellow-500/15 text-yellow-700 px-6 py-2 rounded-full text-sm font-bold border border-yellow-300/30">
//               MEDIA PROFESSIONAL
//             </div>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
//               Zewotir D.<br />
//               <span className="text-yellow-600">Alemu</span>
//             </h1>

//             <p className="text-2xl sm:text-3xl text-gray-700 font-medium">
//               Ethiopian PR Strategist,<br />TV Host & Media Personality
//             </p>

//             <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
//               Strategic Communications & Media Expertise for Lasting Impact. I help organizations raise visibility, tell powerful stories, and build unbreakable brand reputation across all platforms.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 pt-6">
//               <Link
//                 href="/portfolio"
//                 className="inline-flex items-center justify-center gap-3 bg-yellow-500 text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-400 shadow-xl hover:shadow-2xl transition-all"
//               >
//                 Watch My Work <ArrowRight className="h-6 w-6" />
//               </Link>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center gap-3 border-2 border-gray-800 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all"
//               >
//                 <Mail className="h-6 w-6" />
//                 Let's Work Together
//               </Link>
//             </div>
//           </div>

//           <div className="lg:col-span-5 flex justify-center">
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl blur-xl opacity-30 -z-10"></div>
//               <img
//                 src="/z-2.png"
//                 alt="Zewotir D. Alemu"
//                 className="rounded-3xl shadow-2xl border-8 border-white/80"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// ------------------------
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-white to-yellow-50 overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-block bg-yellow-500/15 text-yellow-700 px-6 py-2 rounded-full text-sm font-bold border border-yellow-300/30">
              MEDIA PROFESSIONAL
            </div>

            {/* Name – back to original size, no forced break */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              Zewotir D. <span className="text-yellow-600">Alemu</span>
            </h1>

            {/* Subtitle – back to original size, no forced break */}
            <p className="text-2xl sm:text-3xl text-gray-700 font-medium leading-tight">
              Ethiopian PR Strategist, TV Host & Media Personality
            </p>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Strategic Communications & Media Expertise for Lasting Impact. I help organizations raise visibility, tell powerful stories, and build unbreakable brand reputation across all platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-3 bg-yellow-500 text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-400 shadow-xl hover:shadow-2xl transition-all"
              >
                Watch My Work
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-gray-800 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all"
              >
                <Mail className="h-6 w-6" />
                Let's Work Together
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl blur-xl opacity-30 -z-10"></div>
              <img
                src="/z-2.png"
                alt="Zewotir D. Alemu"
                className="rounded-3xl shadow-2xl border-8 border-white/80 max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// -------------


// export function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-white to-yellow-50 overflow-hidden">

//       {/* Subtle grid pattern */}
//       <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]"></div>

//       {/* Subtle background glows */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

//           {/* Left Content */}
//          <div className="lg:col-span-7 space-y-10 pl-8 lg:border-l-4 lg:border-yellow-600/30 bg-[#FFFCF7]">






//             <div className="inline-block bg-yellow-500/15 text-yellow-700 px-6 py-2 rounded-full text-sm font-bold border border-yellow-300/30">
//               MEDIA PROFESSIONAL
//             </div>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
//               Zewotir D. <span className="text-yellow-600">Alemu</span>
//             </h1>

//             <p className="text-2xl sm:text-3xl text-gray-700 font-medium leading-tight">
//               Ethiopian PR Strategist, TV Host & Media Personality
//             </p>

//             <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
//               Strategic Communications & Media Expertise for Lasting Impact. I help organizations raise visibility, tell powerful stories, and build unbreakable brand reputation across all platforms.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 pt-6">
//               <Link
//                 href="/portfolio"
//                 className="group inline-flex items-center justify-center gap-3 bg-yellow-500 text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-400 shadow-xl hover:shadow-2xl transition-all"
//               >
//                 Watch My Work
//                 <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
//               </Link>

//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center gap-3 border-2 border-gray-800 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all"
//               >
//                 <Mail className="h-6 w-6" />
//                 Let's Work Together
//               </Link>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="lg:col-span-5 flex justify-center">
//             <div className="relative">

//               {/* big faded title behind image */}
//               <h2 className="absolute -top-10 -left-10 text-[120px] lg:text-[160px] font-black text-gray-900/5 tracking-tight select-none">
//                 MEDIA
//               </h2>

//               <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl blur-xl opacity-30 -z-10"></div>

//               <img
//                 src="/z-2.png"
//                 alt="Zewotir D. Alemu"
//                 className="rounded-3xl shadow-2xl border-8 border-white/80 max-w-full h-auto"
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
