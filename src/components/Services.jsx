import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { 
  Laptop, Settings, Database, Share2, Palette, Wand2 
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    className="glass p-8 group relative overflow-hidden"
    style={{ minHeight: '280px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-glow blur-[60px] opacity-20 -z-10 group-hover:opacity-40 transition-opacity" />
    
    <div className="p-4 bg-white/5 text-primary-color rounded-2xl w-fit group-hover:bg-primary-color group-hover:text-white transition-all duration-300">
      <Icon size={32} />
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-primary-color">{title}</h3>
      <p className="text-dim leading-relaxed text-sm">
        {description}
      </p>
    </div>

    <div className="mt-auto flex items-center gap-2 text-primary-color font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
      Learn More <span className="text-lg">→</span>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: "Full Stack Development",
      description: "End-to-end development of modern web applications using MERN stack with scalable architecture.",
      delay: 0.1
    },
    {
      icon: Settings,
      title: "Frontend Development",
      description: "Building highly interactive and responsive user interfaces with React.js and modern CSS.",
      delay: 0.2
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Designing robust server-side logic and managing databases like MySQL and MongoDB.",
      delay: 0.3
    },
    {
      icon: Share2,
      title: "API Integration",
      description: "Seamlessly connecting third-party services and building custom RESTful APIs for data flow.",
      delay: 0.4
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating visually stunning and user-centric designs with glassmorphism and modern aesthetics.",
      delay: 0.5
    },
    {
      icon: Wand2,
      title: "AI Web Features",
      description: "Integrating intelligent features like Resume Analyzers and NLP-based solutions into the web.",
      delay: 0.6
    }
  ];

  return (
    <section id="services">
      <SectionHeader 
        title="What I Offer" 
        subtitle="Specialized services tailored to meet modern digital demands with a focus on quality."
      />

      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
