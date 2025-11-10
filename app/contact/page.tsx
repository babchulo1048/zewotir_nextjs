import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">Let's Connect</h1>
          <p className="text-xl text-foreground/80">
            Have a project in mind? Want to discuss media strategy or collaborate on something exciting? I'm always open
            to new conversations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <a
                      href="mailto:hello@zewotir.com"
                      className="text-foreground/70 hover:text-accent transition-colors"
                    >
                      hello@zewotir.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <a href="tel:+251912345678" className="text-foreground/70 hover:text-accent transition-colors">
                      +251 91 234 5678
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Location</h3>
                    <p className="text-foreground/70">
                      Addis Ababa, Ethiopia
                      <br />
                      Available for Global Collaborations
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-primary mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                  ].map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 rounded-full bg-secondary border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
                        title={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-sm text-foreground/70">
                  <span className="font-semibold text-accent">Note:</span> I typically respond to inquiries within 24-48
                  hours. For urgent matters, please call directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="h-64 bg-muted border border-border rounded-lg flex items-center justify-center">
            <p className="text-foreground/60">Map integration available upon request</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
