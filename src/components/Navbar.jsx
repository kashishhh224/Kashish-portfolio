import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`} style={{ top: 0, left: 0 }}>
      <div className="container mx-auto px-6 flex justify-between items-center" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold heading-font glow-text"
          style={{ cursor: 'pointer' }}
        >
          Kashish.
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-white transition-colors text-dim"
              style={{ fontSize: '0.875rem', fontWeight: 500 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 ml-4"
            style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-dim hover:text-white"><Github size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-dim hover:text-white"><Linkedin size={20} /></a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden" style={{ display: 'none' }}>
           {/* Fallback for now, will use media queries in CSS */}
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'none' }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 mx-6 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* CSS Utility for simple layout until I add full Tailwind if needed */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .md\\:hidden { display: block !important; }
          .hidden.md\\:flex { display: none !important; }
        }
        .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .gap-8 { gap: 2rem; }
        .gap-4 { gap: 1rem; }
        .text-dim { color: var(--text-dim); }
        .text-white { color: #fff; }
      `}} />
    </nav>
  );
};

export default Navbar;
