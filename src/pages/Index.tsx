import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { MetricsSection } from "@/components/MetricsSection";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <HeroSection onCTAClick={scrollToForm} />
      <ProblemSection />
      <SolutionSection />
      <TestimonialSection />
      <MetricsSection />
      
      <section ref={formRef} className="py-16 md:py-24 bg-secondary" id="consultation-form">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Book Your Consultation
            </h2>
            <div className="bg-card p-8 rounded-2xl shadow-xl border border-border">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;