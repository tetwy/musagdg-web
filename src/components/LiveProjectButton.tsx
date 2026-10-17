import React from 'react';
import { motion } from 'framer-motion';

interface LiveProjectButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'Live Project',
  onClick,
  className = '',
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 cursor-pointer select-none ${className}`}
    >
      <span>{label}</span>
    </motion.button>
  );
};

export default LiveProjectButton;
