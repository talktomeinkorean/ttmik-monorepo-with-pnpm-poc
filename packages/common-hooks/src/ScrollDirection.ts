import { useCallback, useEffect, useState } from 'react';

type ScrollDirection = 'down' | 'up' ;

// 위, 아래 스크롤 방향을 감지하는 custom hook
// threshold : 스크롤 방향을 변경하는 데 필요한 최소 스크롤 거리
function useScrollDirection(threshold = 0) {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>('down');

  let ticking = false;
  const updateScrollDir = () => {

  if(typeof document !== 'undefined') {
      let lastScrollY =  document.documentElement.scrollTop | 0;
      const scrollY = document.documentElement.scrollTop;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    }
  };

  const onScroll = useCallback(() => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollDir);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ticking = true;
    }
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  
  return scrollDir;
}




export default useScrollDirection;