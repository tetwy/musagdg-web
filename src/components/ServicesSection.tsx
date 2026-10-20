import React from 'react';
import FadeIn from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    number: '01',
    name: 'Modern Web & 3D Interactive Experiences',
    description:
      'Crafting high-end, cinematic web interfaces using React 19, TypeScript, Tailwind CSS, and Framer Motion. Engineered with liquid glass aesthetics, physics-inspired motion, and responsive performance.',
  },
  {
    number: '02',
    name: 'AI, Computer Vision & Deep Learning',
    description:
      'Developing custom neural architectures, deep learning models, astronomical image classification, and style synthesis with Python, TensorFlow, and OpenCV — seamlessly bridged to modern web frontends.',
  },
  {
    number: '03',
    name: 'High-Concurrency Systems & Backend Engineering',
    description:
      'Architecting resilient, low-latency microservices, real-time Discord platforms, and high-throughput background systems in Go (Golang) with goroutine worker pools and containerized pipelines.',
  },
  {
    number: '04',
    name: 'Game Development & Physics Simulation',
    description:
      'Designing cooperative multiplayer gameplay loops, dynamic rigid-body physics simulations, and immersive 3D game mechanics utilizing Unity (URP) and modern interactive architectures.',
  },
  {
    number: '05',
    name: 'Enterprise Automation & Headless CMS Platforms',
    description:
      'Deploying end-to-end business workflow automations (Make, Zapier, n8n), headless CMS ecosystems (Sanity.io), and multilingual architectures (i18n) for scalable corporate operations.',
  },
];

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
      lang="en"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="font-black uppercase tracking-tight leading-none text-[#0C0C0C]"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            SERVICES
          </h2>
        </FadeIn>

        {/* 5 Service items in vertical list */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {services.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              y={25}
              className="group border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 transition-colors duration-200 hover:bg-black/[0.02] cursor-pointer"
              onClick={() => onSelectService && onSelectService(item.name)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 md:gap-12">
                {/* Number on the left */}
                <span
                  className="font-black text-[#0C0C0C] leading-none select-none tracking-tight shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {item.number}
                </span>

                {/* Name + Description stacked vertically on the right */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
