import { TrendingDown, Users, Clock } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: "78%",
    label: "Average loan reduction",
  },
  {
    icon: Users,
    value: "500+",
    label: "Clients guided",
  },
  {
    icon: Clock,
    value: "<24hrs",
    label: "Our team will call you",
  },
];

export const MetricsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20"
              >
                <metric.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {metric.value}
                </div>
                <p className="text-base opacity-90">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};