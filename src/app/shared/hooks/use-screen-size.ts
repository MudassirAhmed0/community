import React, { useState } from 'react';
import throttle from 'lodash.throttle';

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  React.useEffect(() => {
    const resizeListener = throttle(
      () => {
        setScreenSize(window.innerWidth);
      },
      200,
      { leading: true, trailing: true },
    );

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [screenSize]);

  return { isMobile: screenSize < 1120, isDesktop: screenSize >= 1120, screenSize };
};
