import { useEffect } from "react";

export const LeadForm = () => {
  useEffect(() => {
    // Load the Bigin form script
    const script = document.createElement('script');
    script.id = 'formScript1032377000000442383';
    script.src = 'https://in.bigin.online/minpay/forms/consultancy-form?script=$sYG';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.getElementById('formScript1032377000000442383');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="consultation-form" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div id="bigin-form-container" className="max-w-4xl mx-auto"></div>
      </div>
    </section>
  );
};
