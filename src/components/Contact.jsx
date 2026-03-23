import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, value, href }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
    className="flex items-center gap-6 p-6 glass border-l-4 border-l-transparent hover:border-l-primary-color transition-all duration-300"
    style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none' }}
  >
    <div className="p-4 bg-primary-glow text-primary-color rounded-2xl">
      <Icon size={24} />
    </div>
    <div>
      <p className="text-xs text-dim uppercase tracking-widest mb-1">{title}</p>
      <p className="text-white font-bold text-lg">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
  };

  return (
    <section id="contact" className="bg-[#080808]">
      <SectionHeader 
        title="Get In Touch" 
        subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-16" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
        
        {/* Left Column: Contact Details */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold mb-8 heading-font text-white">Contact Information</h3>
          
          <div className="flex flex-col gap-4">
            <ContactInfo 
              icon={Mail}
              title="Email Me"
              value="kaashish1210@gmail.com"
              href="mailto:kaashish1210@gmail.com"
            />
            <ContactInfo 
              icon={Phone}
              title="Call Me"
              value="+91 8218480832"
              href="tel:+918218480832"
            />
            <ContactInfo 
              icon={Linkedin}
              title="LinkedIn"
              value="kashish-61a366285"
              href="https://linkedin.com/in/kashish-61a366285"
            />
            <ContactInfo 
              icon={MapPin}
              title="Location"
              value="Bulandshahr, Uttar Pradesh"
              href="#"
            />
          </div>

          <div className="mt-12 glass p-8" style={{ marginTop: '3rem' }}>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <MessageSquare size={18} className="text-primary-color" /> Looking for Internships?
            </h4>
            <p className="text-dim text-sm leading-relaxed">
              I am currently seeking opportunities for Summer 2025/2026. If you're looking for a dedicated Full Stack developer who can build scalable and clean solutions, feel free to reach out.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-10 relative overflow-hidden"
          style={{ padding: '2.5rem' }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary-glow blur-[100px] opacity-20 -z-10" />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-dim px-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Ex. John Doe"
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-primary-color outline-none transition-all duration-300"
                required
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '12px', color: '#fff', outline: 'none' }}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-dim px-1">Email Address</label>
              <input 
                type="email" 
                placeholder="Ex. john@example.com"
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-primary-color outline-none transition-all duration-300"
                required
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '12px', color: '#fff', outline: 'none' }}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-dim px-1">Your Message</label>
              <textarea 
                rows="5"
                placeholder="How can I help you?"
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-primary-color outline-none transition-all duration-300 resize-none"
                required
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '12px', color: '#fff', outline: 'none', resize: 'none' }}
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full py-4 flex items-center justify-center gap-3 text-lg"
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '1.125rem' }}
            >
              <Send size={20} /> Send Message
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
