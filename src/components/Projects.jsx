import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { ExternalLink, Github, Filter } from 'lucide-react';

const ProjectCard = ({ title, desc, tech, image, liveLink, githubLink, category }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4 }}
    whileHover={{ y: -12 }}
    className="glass group overflow-hidden"
    style={{ display: 'flex', flexDirection: 'column', borderRadius: '32px' }}
  >
    <div className="relative aspect-video overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '16/9' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
        <div className="flex gap-4">
          <a href={liveLink} className="p-4 bg-white text-black rounded-full hover:bg-primary-color hover:text-white transition-all shadow-xl">
            <ExternalLink size={20} />
          </a>
          <a href={githubLink} className="p-4 bg-white text-black rounded-full hover:bg-primary-color hover:text-white transition-all shadow-xl">
            <Github size={20} />
          </a>
        </div>
      </div>
      <div className="absolute top-6 right-6 glass px-4 py-1.5 text-[10px] font-black text-white uppercase tracking-[0.2em] z-10">
        {category}
      </div>
    </div>
    
    <div className="p-12">
      <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-primary-color transition-colors leading-tight">{title}</h3>
      <p className="text-dim text-lg mb-8 leading-relaxed opacity-80">
        {desc}
      </p>
      
      <div className="flex flex-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {tech.map((t, i) => (
          <span key={i} className="text-[10px] uppercase font-extrabold tracking-widest px-4 py-2 bg-white/10 border border-white/20 text-primary-color rounded-lg" style={{ marginRight: '0.25rem' }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "AI Resume Analyzer",
      desc: "An intelligent platform that uses NLP to extract and analyze resume data, providing feedback and score optimization tips.",
      tech: ["React.js", "Python", "NLP", "Node.js"],
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800",
      category: "AI",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Premium E-Commerce",
      desc: "A full-stack shopping experience with secure checkout, dynamic cart management, and a robust admin dashboard.",
      tech: ["MERN Stack", "Stripe", "Redux"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      category: "Full Stack",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Personal Portfolio",
      desc: "A high-end, responsive portfolio featuring glassmorphism, Framer Motion animations, and a customized dark theme.",
      tech: ["React.js", "Framer Motion", "Vanilla CSS"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      category: "React",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Smart Task Manager",
      desc: "A productivity tool with persistent storage, task categorization, and an intuitive drag-and-drop interface.",
      tech: ["React.js", "Firebase", "Local Storage"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
      category: "React",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const categories = ['All', 'Full Stack', 'React', 'AI'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="min-h-screen">
      <SectionHeader 
        title="Featured Work" 
        subtitle="Exploring the intersection of logic and creativity through project-based learning."
      />

      {/* Filter Tabs */}
      <div className="flex justify-center flex-wrap mb-16" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-10 py-4 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 ${
              filter === cat 
                ? 'bg-primary-color text-white shadow-2xl shadow-primary-glow' 
                : 'glass text-dim hover:text-white hover:bg-white/5'
            }`}
            style={{ border: 'none', cursor: 'pointer', outline: 'none' }}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="container mx-auto grid md:grid-cols-2 gap-10"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}
      >
        <AnimatePresence>
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-20 text-center" style={{ marginTop: '5rem', textAlign: 'center' }}>
        <p className="text-dim mb-8">Want to see more of my code?</p>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2 mx-auto w-fit" 
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 auto' }}>
          <Github size={20} /> Explore GitHub Repository
        </a>
      </div>
    </section>
  );
};

export default Projects;
