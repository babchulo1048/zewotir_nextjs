import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Award, Briefcase, Users, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                About Me
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                A versatile Ethiopian media professional with over a decade of
                experience in strategic communications, media hosting, and brand
                development.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                My journey in media has been defined by a commitment to
                authentic storytelling, strategic thinking, and creating
                meaningful connections between brands and audiences.
              </p>
            </div>
            <div className="relative">
              <div className=" rounded-2xl p-8 shadow-lg">
                <img
                  src="/z-1.png"
                  alt="Zewoti Ralemu Portrait"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            My Story
          </h2>

          <div className="space-y-8 text-lg text-foreground/80 leading-relaxed">
            <p>
              Growing up in Ethiopia, I developed a deep appreciation for
              storytelling and the power of media to connect communities. This
              foundation shaped my career path and continues to inform every
              project I undertake.
            </p>

            <p>
              I began my professional journey in broadcast media, where I
              quickly discovered my talent for engaging audiences and commanding
              presence on camera. What started as a passion for hosting evolved
              into a comprehensive skill set encompassing strategic
              communications, media relations, and brand development.
            </p>

            <p>
              Over the past decade, I've had the privilege of working with
              leading organizations, contributing to major media productions,
              and serving as a trusted advisor on communication strategy. My
              experience spans traditional broadcast media, digital platforms,
              corporate communications, and event management.
            </p>

            <p>
              What drives me is the intersection of authenticity and strategy. I
              believe the most powerful communications come from genuinely
              understanding your message, your audience, and the landscape in
              which they connect. Every project is an opportunity to create
              meaningful impact through compelling storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center">
            Professional Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Media Hosting",
                description:
                  "Multi-season hosting roles on major broadcast networks, corporate events, and cultural programs",
              },
              {
                icon: Award,
                title: "Strategic Communications",
                description:
                  "Developed comprehensive communication strategies for Fortune 500 companies and non-profits",
              },
              {
                icon: Users,
                title: "Client Relations",
                description:
                  "Built lasting relationships with 50+ satisfied clients through exceptional service delivery",
              },
              {
                icon: Star,
                title: "Industry Recognition",
                description:
                  "15+ awards for excellence in media, broadcasting, and communications",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-background border border-border rounded-lg hover:border-accent transition-colors"
                >
                  <Icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Core Competencies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "On-Camera Hosting & Presenting",
              "Strategic Communications Planning",
              "Media Relations & Press Outreach",
              "Brand Development & Positioning",
              "Event Management & MC Services",
              "Content Strategy & Creation",
              "Crisis Communication",
              "Public Speaking & Presentation",
              "Interview & Podcast Hosting",
              "Social Media Strategy",
              "Market Analysis & Research",
              "Executive Communication Coaching",
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-secondary border border-border rounded-lg hover:border-accent transition-colors"
              >
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-accent-foreground mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8">
            Whether you need a media professional, strategic advisor, or brand
            partner, I'd love to discuss how we can work together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-foreground text-accent px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
