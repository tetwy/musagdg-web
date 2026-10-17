import React from 'react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import Magnet from './Magnet';

interface HeroSectionProps {
  onContactClick: () => void;
  onNavigate: (targetId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  onNavigate,
}) => {
  const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Projects', target: 'projects' },
    { label: 'Book a Call', target: 'contact' },
  ];

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full z-20">
        <ul className="flex items-center justify-between w-full px-6 md:px-10 pt-6 md:pt-8 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                type="button"
                onClick={() => {
                  if (link.target === 'contact') {
                    onContactClick();
                  } else {
                    onNavigate(link.target);
                  }
                }}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer select-none"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden text-center z-0 flex items-center justify-center my-auto">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none" lang="en">
            HI, I&apos;M MUSA
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait (Centered absolutely with Magnet) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[260px] sm:w-[330px] md:w-[400px] lg:w-[460px] top-1/2 -translate-y-[48%] pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            <img
              src="/musa-avatar.png"
              alt="Musa Agdag — Software Architect & Full-Stack Developer"
              className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            lang="en"
          >
            AN ARCHITECT & DEVELOPER DRIVEN BY CRAFTING REAL-TIME, STRIKING DIGITAL EXPERIENCES
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
