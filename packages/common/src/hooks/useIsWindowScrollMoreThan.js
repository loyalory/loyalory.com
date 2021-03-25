import { useEffect, useState } from 'react';

const useIsWindowScrollMoreThan = n => {
  const [isMoreThan, setIsMoreThan] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= n && isMoreThan) {
        setIsMoreThan(false);
      }
      if (currentScrollY > n && !isMoreThan) {
        setIsMoreThan(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMoreThan, n]);

  return isMoreThan;
};

export default useIsWindowScrollMoreThan;
