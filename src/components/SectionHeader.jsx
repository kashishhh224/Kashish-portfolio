import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 text-center" style={{ marginBottom: '3rem', textAlign: 'center' }}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold mb-4 heading-font glow-text"
      style={{ fontSize: 'min(3rem, 10vw)', marginBottom: '1rem' }}
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: '80px' }}
      className="h-1 bg-primary-color mx-auto mb-4"
      style={{ height: '4px', backgroundColor: 'var(--primary-color)', margin: '0 auto 1rem auto' }}
    ></motion.div>
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-dim max-w-2xl mx-auto"
      style={{ color: 'var(--text-dim)', maxWidth: '40rem', margin: '0 auto' }}
    >
      {subtitle}
    </motion.p>
  </div>
);

export default SectionHeader;
