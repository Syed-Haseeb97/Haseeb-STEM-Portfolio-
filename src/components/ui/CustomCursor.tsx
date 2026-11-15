import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable completely on touch devices
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      return;
    }

    const cursorEl = cursorRef.current;
    const ringEl = ringRef.current;
    if (!cursorEl || !ringEl) return;

    let mouseX = -100;
    let mouseY = -100;
    let isVisible = false;
    let isHovered = false;
    let animFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursorEl.style.opacity = '1';
      }
    };

    const render = () => {
      // Direct 1:1 hardware-accelerated transform with zero latency
      cursorEl.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      animFrameId = requestAnimationFrame(render);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target && target.closest('a, button, [role="button"], input, textarea, select');
      
      if (interactive && !isHovered) {
        isHovered = true;
        ringEl.className = 'w-8 h-8 rounded-full border border-accent bg-accent/15 transition-[width,height,background-color,border-color,opacity] duration-150 ease-out';
      } else if (!interactive && isHovered) {
        isHovered = false;
        ringEl.className = 'w-2 h-2 rounded-full bg-accent opacity-90 transition-[width,height,background-color,border-color,opacity] duration-150 ease-out';
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      cursorEl.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      cursorEl.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    animFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 flex items-center justify-center will-change-transform"
      style={{
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        transition: 'opacity 0.2s ease-out',
      }}
    >
      <div
        ref={ringRef}
        className="w-2 h-2 rounded-full bg-accent opacity-90 transition-[width,height,background-color,border-color,opacity] duration-150 ease-out"
      />
    </div>
  );
};
