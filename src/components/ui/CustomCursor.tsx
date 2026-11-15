import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop pointers
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const onElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, [role="button"], input, textarea')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onElementHover);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onElementHover);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorDotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
      style={{ willChange: 'transform' }}
    >
      <div
        className={`rounded-full transition-all duration-200 ease-out ${
          isHovered
            ? 'w-7 h-7 bg-transparent border border-accent opacity-90 scale-125'
            : 'w-2 h-2 bg-accent opacity-75'
        }`}
      />
    </div>
  );
};
