import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, ArrowDown, ChevronRight, FileText } from 'lucide-react';

const Hero = () => {
  const profileImg = "https://i.postimg.cc/NFThK0bY/img.jpg";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#48343466] rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center', gap: '3rem' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary-color font-semibold mb-2 tracking-widest text-sm"
            style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.2rem', fontSize: '0.875rem' }}
          >
            HELLO, I'M
          </motion.h4>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 heading-font"
            style={{ fontSize: 'min(5rem, 12vw)', lineHeight: 1.1, marginBottom: '1rem' }}
          >
            <span className="glow-text">Kashish</span>
          </motion.h1>

          <div className="text-xl md:text-2xl text-dim mb-6 h-12" style={{ fontSize: '1.5rem', height: '3rem', color: 'var(--text-dim)' }}>
            <Typewriter
              words={['Full Stack Web Developer', 'CSE Student', 'System Design Enthusiast', 'Problem Solver']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          <p className="text-dim max-w-lg mb-8 text-lg leading-relaxed" style={{ maxWidth: '32rem', marginBottom: '2rem', fontSize: '1.125rem' }}>
            Aspiring Full Stack Developer and Computer Science undergraduate, focused on building <span className="text-white">scalable web applications</span> and delivering efficient, real-world technology solutions.
          </p>

          <div className="flex flex-wrap gap-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              🚀 View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline flex items-center gap-2"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <FileText size={18} />
              📄 Resume
            </motion.button>
          </div>

          <div className="flex gap-6 mt-10" style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem' }}>
            {[{ icon: <Github size={24} />, url: 'https://github.com' },
            { icon: <Linkedin size={24} />, url: 'https://linkedin.com' },
            { icon: <Mail size={24} />, url: 'mailto:kaashish1210@gmail.com' }].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, color: '#fff' }}
                className="text-dim transition-colors"
                style={{ fontSize: '1.5rem' }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
        >
          {/* Avatar Container */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center" style={{ width: 'min(80vw, 24rem)', height: 'min(80vw, 24rem)', position: 'relative', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Glowing Border Animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary-color opacity-30"
              style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px dashed var(--primary-color)', opacity: 0.4 }}
            ></motion.div>

            <motion.div
              className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-4 border-white shadow-2xl z-10"
              style={{ width: '85%', height: '85%', borderRadius: '50%', overflow: 'hidden', border: '4px solid #fff', boxShadow: '0 0 40px var(--primary-glow)', position: 'relative' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={profileImg}
                alt="Kashish"
                className="w-full h-full object-cover"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>

            {/* Float Decorators */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-2 -right-2 glass px-4 py-2 text-xs font-bold z-20"
              style={{ position: 'absolute', top: '-0.5rem', right: '-0.5rem', padding: '0.4rem 0.8rem', fontSize: '0.7rem', fontWeight: 800, borderRadius: '20px' }}
            >
              💻 Code Enthusiast
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-dim flex flex-col items-center gap-2 cursor-pointer"
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} />
      </motion.div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .bg-primary-glow { background: var(--primary-glow); }
        .text-primary-color { color: var(--primary-color); }
        @media (max-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: 1fr !important; text-align: center; }
          .md\\:h-96 { width: 15rem !important; height: 15rem !important; }
          .max-w-lg { margin-left: auto; margin-right: auto; }
          .flex-wrap { justify-content: center; }
          .mt-10 { justify-content: center; }
        }
      `}} />
    </section>
  );
};

export default Hero;
