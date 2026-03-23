import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Extra from './components/Extra';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Styles
import './index.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="App selection:bg-primary-color selection:text-white">
      <Navbar />
      <main className="space-y-32 md:space-y-48" style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        <div id="home"><Hero /></div>
        <div id="about" className="pt-24"><About /></div>
        <div id="skills" className="pt-24"><Skills /></div>
        <div id="experience" className="pt-24"><Experience /></div>
        <div id="services" className="pt-24"><Services /></div>
        <div id="projects" className="pt-24"><Projects /></div>
        <div id="extra" className="pt-24"><Extra /></div>
        <div id="contact" className="pt-24 pb-24"><Contact /></div>
      </main>
      <Footer />
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-primary-glow rounded-full blur-[180px] opacity-20" />
        <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] bg-[#483434] rounded-full blur-[150px] opacity-20" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .selection\\:bg-primary-color::selection { background-color: var(--primary-color); color: #fff; }
        html { scroll-behavior: smooth; }
        section { overflow: hidden; }
      `}} />
    </div>
  );
}

export default App;
