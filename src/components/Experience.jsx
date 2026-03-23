import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Briefcase, Zap, Trophy, TrendingUp } from 'lucide-react';

const ExperienceCard = ({ title, company, period, description, points }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="glass p-10 border-l-4 border-l-primary-color relative group"
    style={{ borderLeftWidth: '4px', borderLeftColor: 'var(--primary-color)', padding: '2.5rem' }}
  >
    <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{title}</h3>
        <p className="text-primary-color font-bold uppercase tracking-wider text-sm">{company}</p>
      </div>
      <div className="shrink-0">
        <span className="glass px-4 py-2 text-xs font-bold text-white rounded-full bg-white/5 whitespace-nowrap">
          {period}
        </span>
      </div>
    </div>
    
    <p className="text-dim mb-8 leading-relaxed italic text-base">{description}</p>
    
    <ul className="space-y-3">
      {points.map((point, i) => (
        <li key={i} className="flex gap-3 text-dim text-sm">
          <span className="text-primary-color">•</span>
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  const bringToTable = [
    {
      icon: <Zap size={32} />,
      title: "Strong Problem-Solving",
      desc: "Solved over 500+ problems on coding platforms like LeetCode and GeeksforGeeks."
    },
    {
      icon: <Trophy size={32} />,
      title: "Certified & Trained",
      desc: "Trained in employability skills and certified by Google Analytics and Mahindra Pride."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Fast Learner",
      desc: "Quickly adapt to new technologies; recently integrated AI into full-stack projects."
    }
  ];

  return (
    <section id="experience" className="bg-[#080808]">
      <SectionHeader 
        title="My Journey" 
        subtitle="As a fresher, I bring strong project experience and a commitment to excellence."
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        
        {/* Left: Formal Experience (Project-based) */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold mb-8 heading-font text-white flex items-center gap-4">
            <Briefcase className="text-primary-color" /> Technical Focus
          </h3>
          
          <ExperienceCard 
            title="Full Stack Project Developer"
            company="Self-Managed / Academic Projects"
            period="2023 - PRESENT"
            description="Developing end-to-end web applications with a focus on performance and UI/UX."
            points={[
              "Architected and implemented diverse projects ranging from AI Resume Analyzers to E-commerce solutions.",
              "Applied advanced DSA concepts to optimize backend logic and database queries.",
              "Ensured high performance with modern frontend frameworks and responsive designs."
            ]}
          />
          
          <ExperienceCard 
            title="B.Tech Computer Science"
            company="Amity University, Uttar Pradesh"
            period="2023 - 2027"
            description="Acquiring deep knowledge in core CS fundamentals and modern software engineering."
            points={[
              "Maintaining strong academic performance with a focus on core engineering principles.",
              "Actively participating in hackathons like Circuit-a-thon and Robo-thon.",
              "Lead contributor to several team-based technical prototypes."
            ]}
          />
        </div>

        {/* Right: What I Bring */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold mb-8 heading-font text-white">What I Bring</h3>
          
          <div className="flex flex-col gap-6">
            {bringToTable.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="glass p-8 flex items-start gap-6"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '2rem' }}
              >
                <div className="p-4 bg-primary-glow text-primary-color rounded-2xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-dim leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
