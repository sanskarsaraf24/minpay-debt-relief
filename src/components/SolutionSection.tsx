import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Settle loans at 30–40% (eligible cases)",
  "Stop bank & agent harassment legally",
  "Reduce EMI through proper talks with lenders",
  "Guide you on CIBIL and how to rebuild",
];

export const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Lawyers Do for You
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg font-medium text-foreground">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};