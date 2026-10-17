import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactModal from './components/ContactModal';
import ProjectModal, { ProjectData } from './components/ProjectModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('General Inquiry');
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  const handleNavigate = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (topic = 'General Inquiry') => {
    setContactTopic(topic);
    setIsContactOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    handleOpenContact(serviceName);
  };

  return (
    <div
      className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif]"
      style={{ overflowX: 'clip' }}
      lang="en"
    >
      {/* 1. Hero Section */}
      <HeroSection
        onContactClick={() => handleOpenContact('Hero Consultation')}
        onNavigate={handleNavigate}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection
        onContactClick={() => handleOpenContact('About Collaboration')}
      />

      {/* 4. Services Section */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 5. Projects Section */}
      <ProjectsSection
        onOpenProjectModal={(project) => setActiveProject(project)}
        onContactClick={() => handleOpenContact('Project Request')}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultTopic={contactTopic}
      />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
