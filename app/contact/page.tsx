"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// Adjusted imports for Lucide icons
import {
  Mail,
  Linkedin,
  Youtube,
  Download,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

// --- START: Mock UI Components (Replace with your actual UI imports) ---
// Note: In a real Next.js/Tailwind project, you would import Button, Input, etc.
// from your shared component library (e.g., shadcn/ui). These are placeholders.

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`rounded-lg shadow-lg p-6 bg-white ${className}`}>
    {children}
  </div>
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
const Input: React.FC<InputProps> = ({ className = "", ...props }) => (
  <input className={`w-full p-2 border rounded ${className}`} {...props} />
);

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}
const Textarea: React.FC<TextareaProps> = ({ className = "", ...props }) => (
  <textarea className={`w-full p-2 border rounded ${className}`} {...props} />
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => (
  <button
    className={`p-3 rounded font-semibold text-center ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Mock Select components
interface SelectProps {
  onValueChange: (value: string) => void;
  value: string;
  children: React.ReactNode;
}
const Select: React.FC<SelectProps> = ({ onValueChange, value, children }) => (
  <select
    onChange={(e) => onValueChange(e.target.value)}
    value={value}
    className="w-full p-2 border rounded"
  >
    {children}
  </select>
);
const SelectTrigger: React.FC<any> = ({ children }) => (
  <option disabled style={{ display: "none" }}>
    {children}
  </option>
); // Hidden option
const SelectValue: React.FC<{ placeholder: string }> = ({ placeholder }) => (
  <option value="" disabled>
    {placeholder}
  </option>
);
const SelectContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <>{children}</>;
const SelectItem: React.FC<{ value: string; children: React.ReactNode }> = ({
  value,
  children,
}) => <option value={value}>{children}</option>;

// Mock Hooks
const useToast = () => ({
  toast: (options: { title: string; description: string }) =>
    console.log(`Toast: ${options.title} - ${options.description}`),
});
const useLatestResume = () => ({
  // *** RESUME LINK UPDATED HERE ***
  resumeUrl:
    "https://res.cloudinary.com/dlujjajxc/raw/upload/v1762588412/resumes/vkpkrtp4v3svbu6hkfba",
  loading: false, // Enabled
  error: null,
});
// --- END: Mock UI Components ---

// TypeScript Interface for Form State
interface ContactFormState {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

// ----------------------------------------------------------------------
// REFINED CONTACT CONTENT COMPONENT (TSX)
// ----------------------------------------------------------------------
const RefinedContactContent: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const { resumeUrl, loading, error } = useLatestResume();

  const handleDownloadClick = () => {
    if (resumeUrl && resumeUrl !== "#") {
      window.open(resumeUrl, "_blank");
      // alert(`Simulating resume download from: ${resumeUrl}`);
    } else {
      alert("Resume link is currently unavailable.");
    }
  };

  const inquiryTypes: string[] = [
    "PR Strategy Consultation",
    "Media Hosting Inquiry",
    "Voice-Over Booking",
    "Art Commission",
    "General Inquiry",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent!",
      description:
        "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", inquiryType: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, inquiryType: value });
  };

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#linkedin" },
    { icon: Youtube, label: "YouTube", href: "#youtube" },
    { icon: Mail, label: "Email", href: "mailto:zewotir@example.com" },
  ];

  return (
    <section id="contact" className="py-10 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-4xl font-serif font-bold mb-4">
            Let's Connect & <span className="text-accent">Collaborate</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Ready to discuss your next high-impact project? Contact me directly
            or book a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Column 1: Direct Message Form */}
          <Card className="p-6 sm:p-8 border border-border">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-primary" />
              Send a Project Inquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="border-border focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="border-border focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Inquiry Type Select */}
              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-sm font-medium mb-2"
                >
                  Inquiry Type
                </label>
                <Select
                  onValueChange={handleSelectChange}
                  value={formData.inquiryType}
                >
                  <SelectTrigger
                    id="inquiryType"
                    className="border-border focus:ring-primary focus:border-primary"
                  >
                    <SelectValue placeholder="Select one..." />
                  </SelectTrigger>
                  <SelectContent>
                    {inquiryTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message / Project Brief
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project and requirements..."
                  rows={5}
                  className="border-border focus:ring-primary focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-3 transition-all duration-300"
              >
                Send Inquiry
              </Button>
            </form>
          </Card>

          {/* Column 2: Booking and Downloads */}
          <div className="space-y-8">
            {/* Calendar Embed Section */}
            <Card className="p-6 sm:p-8 border border-border">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-primary" />
                Book a Consultation
              </h3>
              {/* Placeholder for Calendar Embed */}
              <div className="bg-secondary/50 p-6 rounded-lg h-64 flex items-center justify-center border border-dashed border-border/80">
                <p className="text-foreground/60 text-center">
                  [**External Scheduling Widget Embed**]
                  <br />
                  Paste your Calendly/Acuity/etc. embed code here.
                </p>
              </div>
              <p className="mt-4 text-sm text-foreground/70">
                This is the fastest way to set up a meeting to discuss PR
                strategy, media work, or high-level projects.
              </p>
            </Card>

            {/* Resume Download (Minimalist Button Style) */}
            <Card className="p-6 sm:p-8 bg-secondary/80 border-primary/20">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-foreground">
                  My Resume
                </h2>
                <p className="text-foreground/80">
                  Ready to collaborate? Download my latest resume below.
                </p>

                <Button
                  onClick={handleDownloadClick}
                  disabled={loading || error}
                  // *** UPDATED MINIMALIST BUTTON STYLE ***
                  className={`w-full text-base py-3 transition-colors flex items-center justify-center border border-primary/50 text-primary bg-transparent hover:bg-primary/10 ${
                    loading || error
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:border-primary"
                  }`}
                >
                  <Download className="mr-2 h-5 w-5" />
                  {loading
                    ? "Loading Resume Link..."
                    : error
                    ? "Link Not Available"
                    : "Download Latest Resume (PDF)"}
                </Button>

                {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
              </div>
            </Card>

            {/* Social Connect */}
            <Card className="p-6 sm:p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Direct Links
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-medium text-sm">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// MAIN PAGE COMPONENT (TSX)
// ----------------------------------------------------------------------
const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <RefinedContactContent />
      <Footer />
    </main>
  );
};

export default ContactPage;
