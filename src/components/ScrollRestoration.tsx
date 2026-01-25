import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(location.key, window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.key]);

  useEffect(() => {
    if (location.hash) {
      return;
    }

    const scrollPosition = sessionStorage.getItem(location.key);
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.key, location.hash]);

  return null;
};

export default ScrollRestoration;
