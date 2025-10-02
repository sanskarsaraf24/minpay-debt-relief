import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Phone className="w-5 h-5" />
            <a 
              href="tel:+919211844051" 
              className="text-lg font-semibold hover:text-accent transition-colors"
            >
              +91 9211844051
            </a>
          </div>
          <p className="text-sm opacity-80">
            Call us in case of any issues
          </p>
          <div className="mt-6 pt-6 border-t border-background/20">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Minpay Consultants LLP. All rights reserved.
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
};