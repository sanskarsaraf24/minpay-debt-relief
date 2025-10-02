import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
interface HeroSectionProps {
  onCTAClick: () => void;
}
export const HeroSection = ({
  onCTAClick
}: HeroSectionProps) => {
  return <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDM2YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Settle Your Loan At just{" "}
            <span className="text-accent">30% of the Amount</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 opacity-95 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Pay Less. Live Free. Protect Your CIBIL
          </p>
          
          <p className="text-base md:text-lg mb-8 opacity-80 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            (For Personal Loans & Credit Cards above ₹1 lakh)
          </p>
          
          <Button variant="hero" size="xl" onClick={onCTAClick} className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 group">
            Book Consultation with Lawyer
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>;
};