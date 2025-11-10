import Link from "next/link";
import { Mail, Linkedin, Twitter, Instagram, Send } from "lucide-react"; // Added Send icon

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Defined Social Links to match the structure and icons of the second snippet
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    // Using Twitter and Instagram from the original imports
    { icon: Twitter, href: "#", label: "Twitter/X" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    // Set to bg-primary (Navy Blue) and light text (primary-foreground)
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid (md:grid-cols-4) with divider */}
        <div className="grid md:grid-cols-4 gap-12 mb-10 border-b border-primary-foreground/20 pb-10">
          {/* Column 1: Branding and Philosophy */}
          <div>
            {/* Logo is set to text-accent (Gold) for high contrast */}
            <h3 className="text-2xl font-serif font-bold text-accent mb-3">
              Zewotir
            </h3>
            {/* Text set to primary-foreground/80 */}
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Media strategist and communications expert dedicated to authentic
              storytelling.
            </p>
          </div>

          {/* Column 2: Quick Links (Navigation) */}
          <div>
            <h4 className="font-bold mb-4 text-primary-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Me", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Insights (Blog)", href: "/blog" },
                { label: "Contact / Book", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  {/* Hover color set to text-accent (Gold) */}
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect (Social & Email) */}
          <div>
            <h4 className="font-bold mb-4 text-primary-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    title={social.label}
                    // Icon color set to text-accent (Gold)
                    className="text-accent hover:text-accent/70 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                );
              })}
            </div>
            {/* Email link colors updated for dark theme */}
            <div className="mt-4 flex items-center text-sm text-primary-foreground/80 hover:text-accent transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:hello@zewotir.com">hello@zewotir.com</a>
            </div>
          </div>

          {/* Column 4: Get Updates (Newsletter Signup) */}
          <div>
            <h4 className="font-bold mb-4 text-primary-foreground">
              Get Updates
            </h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Receive exclusive insights on media trends and events.
            </p>
            <form className="flex space-x-2">
              {/* Input background is slightly lighter than the footer, text is light */}
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow bg-primary/80 border border-accent/50 rounded-md p-2 text-primary-foreground placeholder:text-primary-foreground/60 focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
              />
              {/* Button uses accent color for strong call to action */}
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-accent hover:bg-accent/90 text-accent-foreground h-10 px-4 py-2"
                type="submit"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-primary-foreground/60 text-sm">
          <p>© {currentYear} Zewotir Desalegn Alemu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
