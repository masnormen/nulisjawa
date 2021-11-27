import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = ({ children }) => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);
  return children;
};

export default ScrollToTop;
