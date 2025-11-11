import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: "1",
    title: "The Art of Media Storytelling in Modern Communication",
    category: "PR Strategy",
    date: "December 15, 2024",
    readTime: "5 min read",
    image: "/radio.jpg",
    content: `
      <p>In today's fast-paced media landscape, storytelling has become more critical than ever. The ability to craft compelling narratives that resonate with audiences across multiple platforms is what separates successful brands from those that fade into obscurity. Zewotir's approach centers on **authenticity and deep audience insight**.</p>
      
      <h2>Why Authentic Storytelling Wins</h2>
      <p>Authentic storytelling creates emotional connections that are hard to break. When audiences feel genuinely connected to a narrative, they're more likely to engage, share, and advocate for your brand. In my decade of working in media, I've seen firsthand how the right story, told honestly, can transform perception and build lasting loyalty. It's not about marketing; it's about making a human connection.</p>
      
      <h2>Multi-Platform Narrative Strategies</h2>
      <p>The core narrative must be flexible. What works on live broadcast television differs drastically from what succeeds on a rapid social media channel or a long-form podcast. Successful communicators understand these nuances and adapt their content's format, pace, and tone accordingly without compromising the central message's authenticity. This strategic adaptation is key to maximizing reach and impact across all channels.</p>
      
      <h2>The Professional's Edge: Clarity and Connection</h2>
      <p>As a media professional, I've learned that effective storytelling requires a deep understanding of both content and audience psychology. It's about finding the critical intersection where your message meets your audience's interests, needs, and values. Clarity ensures your message is understood; connection ensures it is remembered.</p>
      
      <h2>From Theory to Practice</h2>
      <p>Whether you're a brand, organization, or individual, the principles of effective storytelling remain constant: authenticity, clarity, and connection. Mastering these principles involves continuous practice, seeking candid feedback, and being willing to evolve your narrative as the media environment changes. Invest in your story; it's your most valuable asset.</p>
    `,
  },
  {
    id: "2",
    title: "Building Brand Authority Through Strategic Media Relations",
    category: "Media Relations",
    date: "December 10, 2024",
    readTime: "7 min read",
    image: "/radio.jpg",
    content: `
      <p>Strategic media relations is more than just sending out press releases; it's about cultivating mutual respect and trust with journalists and key media figures. This is the foundation upon which lasting brand authority is built.</p>

      <h2>The Power of Trust in PR</h2>
      <p>In a world saturated with information, trust is the highest currency. By providing media outlets with timely, accurate, and insightful information, we establish ourselves as reliable thought leaders. This ensures that when major stories break, we are the first voice they turn to, rather than just another source.</p>

      <h2>From Reactive to Proactive Engagement</h2>
      <p>Many organizations only engage the media during a crisis or a major announcement. A strategic approach involves being proactive—identifying relevant industry trends and offering expert commentary before the story fully unfolds. This positions the brand as an authority and drives the conversation, rather than just reacting to it.</p>

      <h2>Metrics of Success</h2>
      <p>Success isn't measured purely by the volume of mentions, but by the quality and relevance of the coverage. Are the articles appearing in the right publications? Are they reaching the target audience? Are they accurately reflecting the brand's intended message? These are the questions that define strategic media relations.</p>

      <h2>Long-Term Relationship Building</h2>
      <p>Just like any professional relationship, media relationships require consistency and genuine effort. Regular, non-transactional communication with journalists—offering assistance, providing context, or sharing relevant industry insights—builds the goodwill necessary for long-term success and crisis preparedness.</p>
    `,
  },
  {
    id: "3",
    title: "Content Strategy That Converts: From Creation to Impact",
    category: "Content Strategy",
    date: "December 5, 2024",
    readTime: "6 min read",
    image: "/radio.jpg",
    content: `
    <p>In an age where audiences are bombarded with endless content, only the most strategic, value-driven messages stand out. The key to effective content strategy lies not just in what you create, but in **why** and **for whom** you create it. Each piece of content must serve a purpose—educating, inspiring, or converting your audience with intent.</p>

    <h2>Defining Purpose and Audience</h2>
    <p>Every successful strategy starts with clarity of purpose. Are you trying to inform, entertain, or persuade? Without defining the goal, content risks becoming noise. Similarly, understanding your target audience—what motivates them, what challenges they face, and where they consume information—ensures every word aligns with their journey.</p>

    <h2>The Pillars of Effective Content</h2>
    <ul>
      <li><strong>Consistency:</strong> Regular, reliable communication fosters trust and brand familiarity.</li>
      <li><strong>Authenticity:</strong> Audiences crave real stories told with genuine emotion, not corporate jargon.</li>
      <li><strong>Relevance:</strong> Great content meets audiences where they are and addresses current conversations.</li>
      <li><strong>Optimization:</strong> From SEO to platform formatting, optimization ensures your message reaches its intended audience.</li>
    </ul>

    <h2>From Creation to Conversion</h2>
    <p>Creating content is only half the battle. Strategic distribution, amplification through partnerships or influencers, and leveraging data analytics to track engagement all determine real impact. Measuring what resonates allows for iterative improvement and smarter storytelling over time.</p>

    <h2>Balancing Creativity and Data</h2>
    <p>While creativity breathes life into content, data provides the compass. The most effective strategies marry the two—using insights to inform creative direction while allowing innovative ideas to push boundaries. Data without creativity lacks soul; creativity without data lacks direction.</p>

    <h2>The Long-Term Vision</h2>
    <p>Content that converts is not a one-off effort but a sustained commitment. Brands that build long-term trust through valuable, audience-centered communication are the ones that see real business growth. In my experience, the ultimate goal of content strategy is not just clicks or likes—it's **connection and credibility** that last beyond the campaign.</p>
  `,
  },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id); // ✅ no type mismatch

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Article Not Found
            </h1>
            <Link href="/blog" className="text-accent hover:underline">
              Return to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Image */}
      <div className="h-96 overflow-hidden bg-muted">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent hover:underline mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>

          <div className="mb-8">
            <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-foreground/70">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div
              className="space-y-6 text-lg leading-relaxed text-foreground/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mt-16 p-8 bg-accent/10 border border-accent/20 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Let's Connect
            </h3>
            <p className="text-foreground/70 mb-6">
              Have thoughts on this article? I'd love to hear from you. Feel
              free to reach out to discuss media strategy, communications, or
              any insights you'd like to share.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
