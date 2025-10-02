import { useEffect } from "react";

export const LeadForm = () => {
  useEffect(() => {
    // Load the Bigin form script
    const script = document.createElement('script');
    script.id = 'formScript1032377000000442383';
    script.src = 'https://in.bigin.online/minpay/forms/consultancy-form?script=$sYG';
    script.async = true;
    
    // Append to the form container instead of body
    const container = document.getElementById('bigin-form-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      const existingScript = document.getElementById('formScript1032377000000442383');
      if (existingScript) {
        existingScript.remove();
      }
      // Clear the container
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id="bigin-form-container" className="w-full"></div>
  );
};
