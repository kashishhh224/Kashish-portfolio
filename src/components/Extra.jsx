import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { 
  Trophy, BookOpen, Star, Code, Lightbulb, 
  ChevronRight, Github, Award, Zap
} from 'lucide-react';

const AchievementCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="glass p-6 flex gap-6 items-center"
    style={{ flex: 1, minWidth: '300px' }}
  >
    <div className="p-4 bg-primary-glow text-primary-color rounded-2xl">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-wider">{title}</h4>
      <p className="text-dim text-sm">{desc}</p>
    </div>
  </motion.div>
);

const Extra = () => {
  const learningArr = [
    { title: "Advanced DSA", progress: 80 },
    { title: "System Design Basics", progress: 60 },
    { title: "Scalable Full Stack", progress: 75 },
    { title: "Cloud Fundamentals", progress: 50 }
  ];

  return (
    <section id="extra">
      <SectionHeader 
        title="Extras & Achievements" 
        subtitle="Exploring beyond the curriculum to stay ahead in the rapidly evolving tech landscape."
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-16" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
        
        {/* Achievements Column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold mb-8 heading-font text-white flex items-center gap-3">
            <Trophy className="text-primary-color" /> Major Milestones
          </h3>
          <div className="flex flex-col gap-6">
            <AchievementCard 
              icon={Award}
              title="Circuit-a-thon Participant"
              desc="Successfully built a hardware-software bridge prototype during the university technical fest."
            />
            <AchievementCard 
              icon={Zap}
              title="Robo-thon Finalist"
              desc="Ranked top 10 for implementing a path-finding algorithm for an autonomous bot."
            />
            <AchievementCard 
              icon={Star}
              title="Coda-thon Consistent Performer"
              desc="Maintained top rank in weekly competitive coding contests."
            />
          </div>
        </div>

        {/* Currently Learning Column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold mb-8 heading-font text-white flex items-center gap-3">
            <BookOpen className="text-primary-color" /> Currently Learning
          </h3>
          
          <div className="glass p-8 space-y-8">
            {learningArr.map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white font-semibold flex items-center gap-2">
                    <ChevronRight size={14} className="text-primary-color" /> {item.title}
                  </span>
                  <span className="text-dim">{item.progress}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-primary-color"
                  ></motion.div>
                </div>
              </div>
            ))}
            
            <div className="pt-6 border-t border-white/10 mt-6">
              <p className="text-dim text-sm italic">
                "Continuously updating my toolkit with modern architecture patterns and performance optimization techniques."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Extra;
