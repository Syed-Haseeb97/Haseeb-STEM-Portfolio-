import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { ContactFooter } from './components/sections/ContactFooter';
import { CustomCursor } from './components/ui/CustomCursor';
import { StickyNav } from './components/ui/StickyNav';
import { BackToTop } from './components/ui/BackToTop';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll with responsive snappy wheel settings
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis with ScrollTrigger via gsap.ticker
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-ink selection:bg-accent selection:text-paper">
      <CustomCursor />
      <StickyNav />
      <BackToTop />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <ContactFooter />
    </div>
  );
};

export default App;
