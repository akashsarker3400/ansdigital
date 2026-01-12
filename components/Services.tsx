
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SERVICES, ICON_MAP } from '../constants';
import { ChevronRight } from 'lucide-react';

const ServiceCard: React.FC<{ service: any; idx: number }> = ({ service, idx }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms for different elements
  const rotateX = useTransform(smoothY, [-100, 100], [10, -10]);
  const rotateY = useTransform(smoothX, [-100, 100], [-10, 10]);
  const contentX = useTransform(smoothX, [-100, 100], [5, -5]);
  const contentY = useTransform(smoothY, [-100, 100], [5, -5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      viewport={{ once: true }}
      className="group relative h-full perspective-1000"
    >
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
        whileHover={{ scale: 1.05 }}
        className="h-full glass border-white/5 p-8 rounded-[32px] transition-colors hover:bg-white/[0.04] flex flex-col relative overflow-hidden"
      >
        {/* Subtle Parallax Background Glow */}
        <motion.div 
          style={{ x: contentX, y: contentY }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        />

        <motion.div 
          style={{ translateZ: 50 }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,242,255,0.2)] group-hover:scale-110 transition-transform"
        >
          <div className="text-white">
            {ICON_MAP[service.icon]}
          </div>
        </motion.div>
        
        <motion.h3 
          style={{ translateZ: 30 }}
          className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors"
        >
          {service.title}
        </motion.h3>
        
        <motion.p 
          style={{ translateZ: 20 }}
          className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow"
        >
          {service.description}
        </motion.p>

        <ul className="space-y-2 mb-8">
          {service.details.map((detail: string, dIdx: number) => (
            <motion.li 
              key={dIdx} 
              style={{ translateZ: 10 }}
              className="text-[11px] uppercase tracking-wider text-gray-400 flex items-center gap-2"
            >
              <div className="w-1 h-1 rounded-full bg-cyan-500" />
              {detail}
            </motion.li>
          ))}
        </ul>

        <motion.button 
          style={{ translateZ: 40 }}
          className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-cyan-400 transition-colors"
        >
          Details
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Our Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black font-space mb-6"
          >
            High-Performance <span className="text-gradient">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            We build the tech that powers the world's leading media brands. From ingestion to distribution to collection.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
