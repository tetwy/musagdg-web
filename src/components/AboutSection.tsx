import React from 'react';
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
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
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
