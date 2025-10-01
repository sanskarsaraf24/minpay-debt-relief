import { CreditCard, TrendingDown, Phone, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: CreditCard,
    text: "EMI taking away most of your salary",
  },
  {
    icon: TrendingDown,
    text: "Credit card dues piling up every month",
  },
  {
    icon: Phone,
    text: "Banks or recovery agents calling daily",
  },
  {
    icon: AlertTriangle,
    text: "Fear of losing CIBIL score and future loans",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Facing these problems every day?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-12 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-left text-base md:text-lg text-foreground pt-2">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 inline-block">
            <p className="text-lg font-semibold text-foreground">
              You're not alone.{" "}
              <span className="text-accent">500+ people</span> have already found relief with MinPay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};