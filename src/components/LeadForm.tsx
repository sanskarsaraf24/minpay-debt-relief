import { useEffect } from "react";

export const LeadForm = () => {
  useEffect(() => {
    // Load the Bigin form script
    const script = document.createElement('script');
    script.id = 'formScript1032377000000442383';
    script.src = 'https://in.bigin.online/minpay/forms/consultancy-form?script=$sYG';
    script.async = true;
    
    const formContainer = document.getElementById('bigin-form-container');
    if (formContainer) {
      formContainer.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      const scriptEle = document.getElementById('formScript1032377000000442383');
      if (scriptEle && scriptEle.parentNode) {
        scriptEle.parentNode.removeChild(scriptEle);
      }
    };
  }, []);

  return (
    <div id="bigin-form-container" className="w-full"></div>
  );
};
