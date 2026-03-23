import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          
          {/* Logo & Info */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold heading-font glow-text">Kashish.</h2>
            <p className="text-dim max-w-sm leading-relaxed text-sm">
              3rd-year B.Tech Computer Science student specializing in full-stack engineering and scalable web solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 glass hover:text-primary-color transition-all"><Github size={18} /></a>
              <a href="#" className="p-3 glass hover:text-primary-color transition-all"><Linkedin size={18} /></a>
              <a href="#" className="p-3 glass hover:text-primary-color transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-dim text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Say Hello</h4>
            <div className="space-y-2">
              <p className="text-sm text-dim">kaashish1210@gmail.com</p>
              <p className="text-sm text-dim">+91 8218480832</p>
              <p className="text-sm text-dim">Bulandshahr, Uttar Pradesh</p>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-wrap justify-between items-center gap-6" 
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem' }}>
          <p className="text-dim text-xs">
            © 2026 Kashish. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-dim text-xs">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> & <span className="text-primary-color">React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
