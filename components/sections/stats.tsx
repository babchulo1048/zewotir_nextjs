import { Award, Briefcase, Users, Trophy } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: Briefcase,
      number: "10+",
      label: "Years Experience",
    },
    {
      icon: Award,
      number: "500+",
      label: "Projects Completed",
    },
    {
      icon: Users,
      number: "50+",
      label: "Satisfied Clients",
    },
    {
      icon: Trophy,
      number: "15+",
      label: "Awards Won",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 border border-border rounded-lg hover:border-accent transition-colors"
              >
                <Icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                {/* Updated the font size to text-sm to prevent wrapping on small screens */}
                <div className="text-sm sm:text-base text-foreground/70">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
