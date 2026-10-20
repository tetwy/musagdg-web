import React, { useRef, useState, useEffect } from 'react';

const projectScreenshots = [
  '/projects/compiled-hero.png', // Compiled Studio
  '/projects/neural-result.jpg', // Neural Style Transfer
  '/projects/otuken-hero.png', // Ötükenverse
  '/projects/tetbot-banner.jpg', // Tetbot
];

const row1Gifs = [
  projectScreenshots[0],
  projectScreenshots[1],
  projectScreenshots[2],
  projectScreenshots[3],
  projectScreenshots[0],
  projectScreenshots[1],
];

const row2Gifs = [
  projectScreenshots[2],
  projectScreenshots[3],
  projectScreenshots[0],
  projectScreenshots[1],
  projectScreenshots[2],
  projectScreenshots[3],
];

// Tripled lists for seamless scrolling
const row1Images = [...row1Gifs, ...row1Gifs, ...row1Gifs];
const row2Images = [...row2Gifs, ...row2Gifs, ...row2Gifs];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const updateOffset = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateOffset);
        ticking = true;
      }
    };

    // Initial calculation
    updateOffset();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateOffset, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll (translateX(offset - 200)) */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1Images.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#161618] shadow-lg border border-white/5"
            >
              <img
                src={src}
                alt={`3D Work Preview ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll (translateX(-(offset - 200))) */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2Images.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#161618] shadow-lg border border-white/5"
            >
              <img
                src={src}
                alt={`3D Work Preview ${index + 12}`}
                loading="lazy"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
