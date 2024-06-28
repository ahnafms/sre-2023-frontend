import React from 'react';

const useComponentResize = (ref: React.RefObject<HTMLElement>) => {
  const [width, setWidth] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(ref.current?.offsetWidth ?? null);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return { width };
};

export default useComponentResize;
