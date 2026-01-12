
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  // Duplicate partners for seamless infinite scroll
  const marqueePartners = [...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.4em] mb-4">Trusted Integrations</h3>
          <p className="text-gray-400">Direct connections to the world's most powerful platforms.</p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative flex overflow-x-hidden py-12">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {marqueePartners.map((partner, idx) => (
            <motion.div
              key={`${partner.name}-${idx}`}
              className="flex-shrink-0 mx-12 flex justify-center group relative cursor-help"
              onMouseEnter={() => setHoveredPartner(`${partner.name}-${idx}`)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <motion.img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-40 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
              />
              
              <AnimatePresence>
                {hoveredPartner === `${partner.name}-${idx}` && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -50, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute z-20 pointer-events-none px-4 py-2 glass border-white/20 rounded-xl text-xs font-bold uppercase tracking-widest text-white whitespace-nowrap shadow-2xl flex flex-col items-center gap-1"
                  >
                    <span className="text-cyan-400">{partner.name}</span>
                    <span className="text-[8px] text-gray-500">Official Integration</span>
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white/5 border-r border-b border-white/10 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="glass border-white/5 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">150+</span>
              </div>
              <div>
                <h4 className="text-xl font-bold">Platform Connections</h4>
                <p className="text-gray-500 text-sm">Distributing to every major digital store on the planet.</p>
              </div>
           </div>
           <a href="#contact" className="px-8 py-4 rounded-full glass border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-colors uppercase tracking-widest">
              Explore Our API Connectivity
           </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
