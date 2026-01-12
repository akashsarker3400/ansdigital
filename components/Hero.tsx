
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Play, Layers } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-400, 400], [5, -5]);
  const rotateY = useTransform(smoothX, [-400, 400], [-5, 5]);
  
  const blob1X = useTransform(smoothX, [-500, 500], [-40, 40]);
  const blob1Y = useTransform(smoothY, [-500, 500], [-40, 40]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ x: blob1X, y: blob1Y }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" 
        />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Media Tech Ecosystem v5.2
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-space tracking-tight mb-8 leading-[1.05]">
            Empowering <br />
            <span className="text-gradient">Digital Media</span> <br />
            Global Reach.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-light">
            ANS Digital is architecting the future of global media infrastructure. From AI-driven distribution to enterprise-scale content rights management.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a href="#contact" className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all flex items-center justify-center gap-3 group">
              Explore Our Solutions
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="w-full sm:w-auto px-10 py-5 rounded-full glass border border-white/10 text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Our Vision
            </a>
          </div>

          <div className="mt-16 flex items-center gap-10 border-t border-white/5 pt-10">
            <div className="flex flex-col">
              <span className="text-3xl font-black font-space text-cyan-400">100B+</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Impressions</span>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-black font-space text-purple-400">50K+</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Assets</span>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-black font-space text-orange-400">24/7</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Uptime</span>
            </div>
          </div>
        </motion.div>

        {/* Precise Image Collage Layout */}
        <div className="relative z-0 flex justify-center lg:justify-end py-10">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative w-full max-w-[550px] aspect-square"
          >
            {/* 1. Global Mesh (Top Left - Large Square-ish) */}
            <motion.div 
              className="absolute top-0 left-0 w-[58%] h-[52%] z-20 overflow-hidden rounded-3xl glass border-white/10 shadow-2xl group transition-all duration-500"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ borderColor: "rgba(0, 242, 255, 0.4)", backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <img 
                src="https://www.abir-inv.com/wp-content/uploads/2021/09/concept-copyright-intellectual-property-1024x576.jpg" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                alt="Digital World"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                 <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
                   <Layers size={14} className="text-white" />
                 </div>
                 <span className="text-[9px] font-black uppercase tracking-widest text-white">Global Mesh v1</span>
              </div>
            </motion.div>

            {/* 2. Media Accent (Top Right - Tall Rectangle) */}
            <motion.div 
              className="absolute top-8 right-0 w-[38%] h-[48%] z-10 overflow-hidden rounded-3xl glass border-white/10 shadow-xl group transition-all duration-500"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ borderColor: "rgba(112, 0, 255, 0.4)", backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                alt="Studio"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-10 h-10 rounded-full bg-cyan-500/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                   <Play size={16} className="text-white fill-white" />
                 </div>
              </div>
            </motion.div>

            {/* 3. Circuit Detail (Bottom Left - Small Square) */}
            <motion.div 
              className="absolute bottom-16 left-8 w-[32%] h-[32%] z-30 overflow-hidden rounded-2xl glass border-white/20 shadow-xl group transition-all duration-500"
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ borderColor: "rgba(0, 242, 255, 0.5)", backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                alt="Tech Detail"
              />
              <div className="absolute top-2 left-2">
                 <Zap size={14} className="text-cyan-400" />
              </div>
            </motion.div>

            {/* 4. Neural Node (Bottom Right - Wide/Large Square) */}
            <motion.div 
              className="absolute bottom-0 right-4 w-[55%] h-[42%] z-20 overflow-hidden rounded-3xl glass border-white/10 shadow-2xl group transition-all duration-500"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              whileHover={{ borderColor: "rgba(112, 0, 255, 0.4)", backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <img 
                src="https://storage.needpix.com/rsynced_images/technology-662833_1280.jpg" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                alt="Neural Processing"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/60" />
              <div className="absolute top-6 right-6 text-right">
                 <span className="text-[9px] font-black uppercase tracking-[0.2em] text-purple-400">Neural Node</span>
                 <div className="h-[1px] w-8 bg-purple-500 ml-auto mt-1" />
              </div>
            </motion.div>

            {/* Subtle Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-[0.05]">
              <path d="M 100 100 L 450 450" stroke="white" strokeWidth="1" strokeDasharray="5 5" fill="none" />
              <path d="M 400 100 L 150 400" stroke="white" strokeWidth="1" strokeDasharray="5 5" fill="none" />
            </svg>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-500 to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.4em] text-gray-500 font-bold">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
