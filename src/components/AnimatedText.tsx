import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const displayChar = char === ' ' ? '\u00A0' : char;

  return (
    <span className="relative inline-block">
      <span className="invisible select-none" aria-hidden="true">
        {displayChar}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0"
      >
        {displayChar}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;

  let globalCharCount = 0;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] ${className}`}
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const startIndex = globalCharCount;
        globalCharCount += wordChars.length;

        // Account for trailing space if not the last word
        const hasTrailingSpace = wordIndex < words.length - 1;
        const spaceIndex = hasTrailingSpace ? globalCharCount++ : -1;

        return (
          <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIndex) => {
              const currentGlobalIndex = startIndex + charIndex;
              const start = currentGlobalIndex / totalChars;
              const end = Math.min(1, (currentGlobalIndex + 1) / totalChars);

              return (
                <Character
                  key={`char-${wordIndex}-${charIndex}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
            {hasTrailingSpace && (
              <Character
                key={`space-${wordIndex}`}
                char=" "
                progress={scrollYProgress}
                range={[
                  spaceIndex / totalChars,
                  Math.min(1, (spaceIndex + 1) / totalChars),
                ]}
              />
            )}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
