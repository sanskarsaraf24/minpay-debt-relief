import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I had a ₹2.5L personal loan. MinPay helped me settle it under ₹1L. Huge relief.",
    author: "Rajesh, Mumbai",
  },
  {
    quote: "The calls stopped after MinPay lawyers stepped in. I finally sleep in peace.",
    author: "Smita, Pune",
  },
  {
    quote: "₹51 gave me clear answers. No hidden traps.",
    author: "Arun, Bengaluru",
  },
];

export const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Real People. Real Results.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow relative"
              >
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                <p className="text-base mb-4 text-foreground italic relative z-10">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm font-semibold text-primary">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};