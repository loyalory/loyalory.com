import { useEffect, useRef, useState } from 'react';

const useActiveIndicator = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const currentActiveLink = ref.current?.querySelector(`[data-to="${activeMenu}"]`);

    setIndicatorWidth(currentActiveLink?.offsetWidth);
    setIndicatorLeft(currentActiveLink?.offsetLeft);
  }, [activeMenu]);

  return {
    ref,
    setActiveMenu,
    indicatorWidth,
    indicatorLeft,
  };
};

export default useActiveIndicator;
