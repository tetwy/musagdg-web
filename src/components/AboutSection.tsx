import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const bioText =
    "Merging modern engineering, artificial intelligence, and high-performance web architecture. From zero-latency multiplayer web apps to scalable digital platforms, I treat software as an exact craft with precision down to every single pixel. Let's build something extraordinary together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C]"
      lang="en"
    >

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Top-Left Corner: 3D Code Brackets </> */}
        <motion.div
          className="absolute -top-8 -left-2 sm:-top-12 sm:-left-12 md:-top-16 md:-left-20 lg:-left-24 pointer-events-none select-none z-0"
          animate={{
            y: [-6, 6, -6],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src="/decor/decor-code.png"
            alt="3D Code Brackets"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_10px_30px_rgba(0,210,255,0.25)] opacity-80 sm:opacity-95"
            loading="lazy"
          />
        </motion.div>

        {/* Top-Right Corner: 3D Curly Braces { } */}
        <motion.div
          className="absolute -top-8 -right-2 sm:-top-12 sm:-right-12 md:-top-16 md:-right-20 lg:-right-24 pointer-events-none select-none z-0"
          animate={{
            y: [6, -6, 6],
            rotate: [3, -3, 3],
          }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src="/decor/decor-braces.png"
            alt="3D Curly Braces"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_10px_30px_rgba(180,80,255,0.25)] opacity-80 sm:opacity-95"
            loading="lazy"
          />
        </motion.div>

        {/* Bottom-Left Corner: 3D Terminal Prompt >_ */}
        <motion.div
          className="absolute -bottom-6 -left-2 sm:-bottom-10 sm:-left-12 md:-bottom-14 md:-left-20 lg:-left-24 pointer-events-none select-none z-0"
          animate={{
            y: [5, -7, 5],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 6.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src="/decor/decor-terminal.png"
            alt="3D Terminal Prompt"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_10px_30px_rgba(0,230,255,0.25)] opacity-80 sm:opacity-95"
            loading="lazy"
          />
        </motion.div>

        {/* Bottom-Right Corner: 3D CPU Microchip */}
        <motion.div
          className="absolute -bottom-6 -right-2 sm:-bottom-10 sm:-right-12 md:-bottom-14 md:-right-20 lg:-right-24 pointer-events-none select-none z-0"
          animate={{
            y: [-7, 5, -7],
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 5.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src="/decor/decor-chip.png"
            alt="3D CPU Microchip"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_10px_30px_rgba(0,180,255,0.28)] opacity-80 sm:opacity-95"
            loading="lazy"
          />
        </motion.div>

        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            ABOUT ME
          </h2>
        </FadeIn>

        {/* Gap between heading and text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Character-by-character scroll animated paragraph */}
        <AnimatedText text={bioText} />

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact button */}
        <FadeIn delay={0.2} y={30}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
