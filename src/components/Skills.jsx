import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { 
  Code2, Layout, Server, Database, Brain, Wrench, Languages, Star,
  Terminal, Cpu, Globe, Layers, Zap, Users
} from 'lucide-react';

const SkillTag = ({ name }) => (
  <motion.span 
    whileHover={{ 
      scale: 1.1, 
      backgroundColor: 'rgba(139, 69, 19, 0.2)',
      borderColor: 'var(--primary-color)',
      boxShadow: '0 0 15px var(--primary-glow)'
    }}
    className="px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-white/10 bg-white/5 text-dim transition-all cursor-default"
    style={{ display: 'inline-block' }}
  >
    {name}
  </motion.span>
);

const SkillCard = ({ category, skills, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -10 }}
    className="glass p-10 flex flex-col gap-8 group"
    style={{ borderRadius: '32px' }}
  >
    <div className="flex items-center gap-5">
      <div className="p-4 bg-white/5 rounded-2xl text-primary-color group-hover:bg-primary-color group-hover:text-white transition-all duration-300">
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-black text-white tracking-tight">{category}</h3>
    </div>
    
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <SkillTag key={index} name={skill} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillsData = [
    {
      category: "Programming",
      icon: Code2,
      skills: ["C++", "Java", "Python", "JavaScript"]
    },
    {
      category: "Frontend",
      icon: Layout,
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Core CS",
      icon: Brain,
      skills: ["DSA", "OOP", "DBMS", "Operating Systems"]
    },
    {
      category: "Tools & Others",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Postman", "AI Integration", "UI/UX Basics"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <SectionHeader 
        title="Technical Expertise" 
        subtitle="A curated list of my technical proficiency and core development tools."
      />

      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
        {skillsData.map((data, i) => (
          <SkillCard key={i} {...data} />
        ))}
      </div>

      {/* Core Strengths Section */}
      <div className="mt-32 px-6" style={{ marginTop: '8rem' }}>
        <h4 className="text-center text-dim text-sm font-black uppercase tracking-[0.3em] mb-12">Core Strengths</h4>
        <div className="flex flex-wrap justify-center gap-6" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
          {[
            { name: 'Problem Solver', icon: Brain },
            { name: 'Fast Learner', icon: Zap },
            { name: 'Adaptable', icon: Globe },
            { name: 'Team Player', icon: Users },
            { name: 'Strong Logic', icon: Cpu }
          ].map((strength, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px var(--primary-glow)',
                borderColor: 'var(--primary-color)'
              }}
              className="flex items-center gap-3 glass px-8 py-4 rounded-full border border-white/5 text-white group cursor-default"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '50px' }}
            >
              <strength.icon size={18} className="text-primary-color group-hover:scale-125 transition-transform" />
              <span className="text-sm font-black uppercase tracking-widest">{strength.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
