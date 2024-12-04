import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Preline = () => {
  const location = useLocation();

  useEffect(() => {
    // Dynamically import Preline JS
    import('preline/preline')
      .then((Preline) => {
        console.log('Preline JS imported successfully:', Preline);
      })
      .catch((err) => {
        console.error('Failed to load Preline JS:', err);
      });
  }, []);

  useEffect(() => {
    try {
      // Ensure HSStaticMethods exists and is initialized
      if (window.HSStaticMethods) {
        // Check for required elements before initializing
        const elements = document.querySelectorAll('[data-preline]');
        if (elements.length > 0) {
          window.HSStaticMethods.autoInit();
          console.log('Preline initialized for route:', location.pathname);
        } else {
          console.warn('No elements found for Preline initialization.');
        }
      } else {
        console.warn('HSStaticMethods is not defined. Preline may not be loaded.');
      }
    } catch (err) {
      console.error("Error initializing Preline:", err);
    }
  }, [location.pathname]);

  return null;
};

export default Preline;
