import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { ProjectData } from './ProjectModal';
import { ArrowUp, Sparkles, Github, Linkedin } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  onOpenModal: (project: ProjectData) => void;
  sectionScrollProgress: MotionValue<number>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onOpenModal,
}) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardContainerRef}
      className="h-[85vh] sticky top-24 md:top-32 flex items-center justify-center"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-6 shadow-2xl transition-shadow"
      >
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#D7E2EA]/15 pb-5 sm:pb-6">
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tight shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 110px)' }}
            >
              {project.number}
            </span>

            {/* Category + Name */}
            <div className="flex flex-col justify-center">
              <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/70">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] tracking-wide"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Live Project Button */}
          <div className="self-start lg:self-center">
            <LiveProjectButton label={project.liveUrl ? 'Live Project' : 'Project Details'} onClick={() => onOpenModal(project)} />
          </div>
        </div>

        {/* Bottom Row: Two-Column Image Grid */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-stretch">
          {/* Left Column (40% width) - 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18181B] border border-white/5"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Img1}
                style={project.contain ? { backgroundColor: project.contain.bg } : undefined}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className={`w-full h-full ${project.contain?.slots.includes('col1Img1') ? 'object-contain' : 'object-cover'} transition-transform duration-700 hover:scale-105`}
              />
            </div>
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18181B] border border-white/5"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Img2}
                style={project.contain ? { backgroundColor: project.contain.bg } : undefined}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className={`w-full h-full ${project.contain?.slots.includes('col1Img2') ? 'object-contain' : 'object-cover'} transition-transform duration-700 hover:scale-105`}
              />
            </div>
          </div>

          {/* Right Column (60% width) - 1 tall image */}
          <div className="w-full md:w-[60%] flex">
            <div className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18181B] border border-white/5 min-h-[220px] sm:min-h-[280px] md:min-h-full">
              <img
                src={project.col2Img}
                style={project.contain ? { backgroundColor: project.contain.bg } : undefined}
                alt={`${project.name} hero render`}
                loading="lazy"
                className={`w-full h-full ${project.contain?.slots.includes('col2Img') ? 'object-contain' : 'object-cover'} transition-transform duration-700 hover:scale-105`}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onOpenProjectModal: (project: ProjectData) => void;
  onContactClick: () => void;
}

const projectsData: ProjectData[] = [
  {
    id: 'tetbot',
    number: '01',
    name: 'TETBOT',
    category: '(Rust Systems & Discord)',
    description:
      'Discord bot written in Rust that turns voice time into levels, rewards and a per-server virtual economy, with mini-games played with virtual coins (card and luck themed, no real money), creature hunting and radio. Built for reliability: a single-writer SQLite ledger keeps balances consistent, supervised background tasks restart after panics, and deploys are checksum-verified with automatic rollback.',
    tools: ['Rust', 'Serenity & Poise', 'Tokio', 'SQLite', 'Axum', 'Prometheus', 'Docker', 'GitHub Actions'],
    liveUrl: 'https://discord.com/oauth2/authorize?client_id=1154322243187396710&scope=bot%20applications.commands&permissions=286288976',
    // tetbot private; showcase repo henüz açılmadı, ileride açılacak
    githubUrl: 'https://github.com/tetwy/tetbot-showcase',
    col1Img1: '/projects/tetbot-avatar-framed.png',
    col1Img2: '/projects/tetbot-code.png',
    col2Img: '/projects/tetbot-banner.jpg',
  },
  {
    id: 'duel-arena',
    number: '02',
    name: 'DUEL ARENA',
    category: '(Real-Time Multiplayer Games)',
    description:
      'Multiplayer party-game platform: one portal, many games. Create a room, share the link and play in real time with friends. Launches with Veto, a forbidden-word duel, and Harfbaz, a fast category word race, with SketchSpy coming soon. Rooms sync live through Supabase, and each game runs fully isolated inside the portal.',
    tools: ['React 19', 'TypeScript', 'Supabase Realtime', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    liveUrl: 'https://duel-arena-games-728r.vercel.app/#/portal',
    githubUrl: 'https://github.com/tetwy/duel-arena-games',
    col1Img1: '/projects/duel-veto-cover.jpg',
    col1Img2: '/projects/duel-shot-2.png',
    col2Img: '/projects/duel-shot-1.png',
    contain: { bg: '#121317', slots: ['col1Img2', 'col2Img'] },
  },
  {
    id: 'astro-siniflandirici',
    number: '03',
    name: 'ASTRO SINIFLANDIRICI',
    category: '(AI & Computer Vision)',
    description:
      'Full-stack AI app that analyzes deep-space photos and classifies the celestial objects in them. A Flask backend uses OpenCV to separate light sources from the background and a RandomForest model to sort them into 6 classes such as stars, galaxies and nebulae, while the React frontend draws color-coded boxes and distribution charts.',
    tools: ['Python', 'Flask', 'OpenCV', 'scikit-learn', 'React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/tetwy/astro-siniflandirici',
    col1Img1: '/projects/astro-onizleme.png',
    col1Img2: '/projects/astro-shot-1.png',
    col2Img: '/projects/astro-shot-2.png',
    contain: { bg: '#030719', slots: ['col1Img1', 'col1Img2', 'col2Img'] },
  },
  {
    id: 'compiled-studios',
    number: '04',
    name: 'COMPILED STUDIO',
    category: '(Game Studio & Interactive Web)',
    description:
      'Official website of an independent game studio, introducing its debut title How to Pirate, a 2-4 player physics-driven co-op pirate adventure. Features a full-screen video hero, game flow and community sections, built with React 19 and cinematic dark-mode motion.',
    tools: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Vercel'],
    liveUrl: 'https://compiled-studios.vercel.app',
    githubUrl: 'https://github.com/tetwy/compiled-studios',
    col1Img1: '/projects/compiled-gameplay.png',
    col1Img2: '/projects/compiled-pillars.png',
    col2Img: '/projects/compiled-hero.png',
  },
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProjectModal,
  onContactClick,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 sm:pt-28 md:pt-36 pb-16 px-5 sm:px-8 md:px-10"
      lang="en"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading: PROJECTS */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            PROJECTS
          </h2>
        </FadeIn>

        {/* Sticky stacking cards */}
        <div className="relative pb-24 sm:pb-32">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projectsData.length}
              onOpenModal={onOpenProjectModal}
              sectionScrollProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Bottom Portfolio Footer */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#D7E2EA]/15 flex flex-col md:flex-row items-center justify-between gap-6 text-[#D7E2EA]/70 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-white uppercase tracking-widest text-base">
              Musa Agdag — Software Architect & Full-Stack Developer
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
            <a
              href="https://github.com/tetwy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-white" />
              <span>GitHub</span>
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
            <span className="flex items-center gap-1.5 text-[#D7E2EA]/60">
              <svg
                className="w-3.5 h-3.5 fill-current text-[#5865F2]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span>Discord: <strong className="text-white font-normal">tetwy</strong></span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onContactClick}
              className="text-[#D7E2EA] hover:text-white uppercase tracking-wider font-medium transition-colors cursor-pointer"
            >
              Book a Call
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-white transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
