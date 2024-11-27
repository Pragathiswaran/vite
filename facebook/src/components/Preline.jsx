import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Preline = () => {
  const location = useLocation();

  useEffect(() => {
    import('preline/preline')
      .then(() => {
        console.log('Preline JS imported successfully');
      })
      .catch((err) => {
        console.error('Failed to load Preline JS:', err);
      });
  }, []);

  useEffect(() => {
    try {
      // Ensure HSStaticMethods exists before calling
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
        console.log('Preline initialized for route:', location.pathname);
      } else {
        console.warn('HSStaticMethods is not defined. Preline may not be loaded.');
      }
    } catch (err) {
      console.error('Error initializing Preline:', err);
    }
  }, [location.pathname]);

  return null; // Empty component, no rendering needed
};

export default Preline;
