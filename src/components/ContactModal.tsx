import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Mail, CheckCircle2, Github, Linkedin, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

// Set your Cal.com username or custom link here:
const DEFAULT_CAL_LINK = 'tetwy/15min';

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [calLink] = useState(DEFAULT_CAL_LINK);
  const [isCopied, setIsCopied] = useState(false);
  const [isDiscordCopied, setIsDiscordCopied] = useState(false);

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('musagdg@icloud.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText('tetwy');
    setIsDiscordCopied(true);
    setTimeout(() => setIsDiscordCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden" lang="en">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md z-0 cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl lg:max-w-5xl h-[92vh] max-h-[720px] flex flex-col rounded-2xl sm:rounded-3xl border border-[#D7E2EA]/20 bg-[#121214] text-[#D7E2EA] shadow-2xl z-10 my-auto overflow-hidden pointer-events-auto"
          >
            {/* Header */}
            <div className="px-5 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 relative shrink-0 flex items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  BOOK A CALL WITH MUSA
                </h2>
                <span className="text-xs text-[#D7E2EA]/60 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 15-Min Strategy Session
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://cal.com/${calLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 hover:border-white/40 text-xs text-[#D7E2EA] hover:text-white transition-all cursor-pointer"
                  title="Open on Cal.com in a new tab"
                >
                  <span>Fullscreen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Cal.com Embedded Frame */}
            <div className="flex-1 w-full bg-[#0E0E10] relative overflow-hidden">
              <iframe
                src={`https://cal.com/${calLink}?embed=true&theme=dark`}
                title="Cal.com Scheduler"
                className="w-full h-full border-0"
                allow="camera; microphone; autoplay; clipboard-write"
              />
            </div>

            {/* Footer Quick Contact & Socials */}
            <div className="px-5 sm:px-6 py-3.5 border-t border-white/10 bg-[#161618] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
              <div className="flex flex-wrap items-center gap-4 text-[#D7E2EA]/70">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                  title="Click to copy email"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B600A8]" />
                  <span>musagdg@icloud.com</span>
                  {isCopied && (
                    <span className="text-emerald-400 text-[10px] uppercase font-bold flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Copied
                    </span>
                  )}
                </button>
                <a
                  href="https://github.com/tetwy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-white" />
                  <span>GitHub (@tetwy)</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/musa-agdag-0313052bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyDiscord}
                  className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                  title="Click to copy Discord username"
                >
                  <svg
                    className="w-3.5 h-3.5 fill-current text-[#5865F2]"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>Discord (@tetwy)</span>
                  {isDiscordCopied && (
                    <span className="text-emerald-400 text-[10px] uppercase font-bold flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Copied
                    </span>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-xs uppercase font-medium tracking-wider cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
