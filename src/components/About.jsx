import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Award, BookOpen, Code, Cpu } from 'lucide-react';

const Counter = ({ value, label }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="text-center p-6 glass flex flex-col items-center"
    style={{ flex: 1, padding: '1.5rem', textAlign: 'center' }}
  >
    <h3 className="text-4xl font-bold text-white mb-2">{value}</h3>
    <p className="text-dim text-sm uppercase tracking-wider">{label}</p>
  </motion.div>
);

const CertificationCard = ({ title, issuer, image }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass p-6 flex flex-col gap-4"
    style={{ flex: 1, minWidth: '280px', maxWidth: '350px' }}
  >
    <div className="h-48 overflow-hidden rounded-xl bg-white flex items-center justify-center p-6 shadow-inner">
      <img src={image} alt={title} className="max-h-full max-w-full object-contain" />
    </div>
    <div className="pt-2">
      <h4 className="font-bold text-lg text-white mb-1 leading-tight">{title}</h4>
      <p className="text-dim text-sm font-medium tracking-wide uppercase">{issuer}</p>
    </div>
  </motion.div>
);

const About = () => {
  const certifications = [
    {
      title: "Google Analytics GA4 Certification",
      issuer: "Google",
      image: "https://i.postimg.cc/mrXnd4J7/Google-Analytics-GA4-Certification.png"
    },
    {
      title: "Employability Training",
      issuer: "Mahindra Pride Classroom",
      image: "https://i.postimg.cc/Y9Q1vf6B/employability-skill-training-programme.jpg"
    },
    {
      title: "ICAT Qualified",
      issuer: "ICAT",
      image: "https://i.postimg.cc/VkNBKt89/ICAT-Qualified.png"
    }
  ];

  return (
    <section id="about" className="bg-[#080808]">
      <SectionHeader 
        title="About Me" 
        subtitle="Bridging the gap between design and functionality with a passion for scalable systems."
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-start" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        
        {/* Left: Bio & Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-6 heading-font text-white">Who am I?</h3>
          <p className="text-dim text-lg mb-6 leading-relaxed">
            I'm a <span className="text-white">B.Tech Computer Science student</span> at Amity University, Uttar Pradesh (Class of 2027). 
            With a strong foundation in <span className="text-white">DSA, OOP, and Full Stack Development</span>, I enjoy building projects that tackle real-world challenges.
          </p>
          <p className="text-dim text-lg mb-8 leading-relaxed">
            I'm currently focused on sharpening my skills in <span className="text-primary-color font-semibold">MERN Stack</span> and exploring AI integration to create smarter web solutions. 
            I bring a fast-learning mindset and a dedication to writing clean, optimized code.
          </p>

          <div className="grid grid-cols-2 gap-6" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="flex gap-4 items-center">
              <div className="p-3 glass text-primary-color"><BookOpen size={24} /></div>
              <div>
                <p className="text-xs text-dim uppercase">Education</p>
                <p className="text-white font-medium">B.Tech CSE (2027)</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="p-3 glass text-primary-color"><Cpu size={24} /></div>
              <div>
                <p className="text-xs text-dim uppercase">Tech Stack</p>
                <p className="text-white font-medium">Full Stack</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Stats & Image Placeholder (Optional) */}
        <div className="flex flex-col gap-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="grid grid-cols-2 gap-4" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Counter value="10+" label="Projects Done" />
            <Counter value="15+" label="Tech Tools" />
            <Counter value="500+" label="Coding Problems" />
            <Counter value="3+" label="Major Certs" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass p-8 text-center border-l-4 border-l-primary-color"
            style={{ borderLeftWidth: '4px', borderLeftColor: 'var(--primary-color)' }}
          >
            <p className="italic text-xl text-dim">
              "Building the future, one line of code at a time."
            </p>
            <p className="mt-4 font-bold text-white tracking-widest">— KASHISH</p>
          </motion.div>
        </div>
      </div>

      {/* Certifications Subsection */}
      <div className="mt-24" style={{ marginTop: '6rem' }}>
        <h3 className="text-2xl font-bold mb-10 heading-font text-center text-white">Professional Certifications</h3>
        <div className="flex flex-wrap justify-center gap-8" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {certifications.map((cert, i) => (
            <CertificationCard key={i} {...cert} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        #about .container { margin-bottom: 2rem; }
      `}} />
    </section>
  );
};

export default About;
