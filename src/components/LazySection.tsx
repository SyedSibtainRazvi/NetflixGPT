import { useEffect, useRef, useState } from 'react';

const LazySection = ({
  children,
  placeholderHeight = 400,
}: {
  children: React.ReactNode;
  placeholderHeight?: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? undefined : placeholderHeight }}>
      {isVisible ? children : <div className="w-full" style={{ height: placeholderHeight }} />}
    </div>
  );
};

export default LazySection;
