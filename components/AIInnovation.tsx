
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Eye, Zap, Network, ShieldCheck, Microscope, Cpu, LineChart } from 'lucide-react';

const AIInnovation: React.FC = () => {
  const aiFeatures = [
    {
      icon: <Eye className="text-cyan-400" size={32} />,
      title: "Visionary Content Detection",
      description: "Proprietary computer vision models that identify visual assets across millions of hours of global content with 99.8% accuracy."
    },
    {
      icon: <Microscope className="text-purple-400" size={32} />,
      title: "Deep Audio Fingerprinting",
      description: "Analyzing sub-second audio snippets to identify copyright usage even in heavily modified or layered content."
    },
    {
      icon: <LineChart className="text-orange-400" size={32} />,
      title: "Neural Yield Analysis",
      description: "Predictive analytics using transformer models to forecast royalty revenue and optimize distribution strategies."
    }
  ];

  return (
    <section id="innovation" className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Abstract AI Visual Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ai-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="white" />
              <path d="M 50 0 L 50 100 M 0 50 L 100 50" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ai-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block p-2 rounded-xl glass border-white/10 mb-6"
            >
              <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/10 rounded-lg">
                <Cpu size={14} className="text-cyan-400" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400">Innovation Lab v4.2</span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black font-space mb-8">
              Intelligence Driven <br /> <span className="text-gradient">Content DNA</span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
              ANS Digital is merging Artificial Intelligence with media infrastructure. Our AI-assisted content detection systems analyze metadata and asset fingerprints in real-time, providing unprecedented security and revenue tracking.
            </p>

            <div className="space-y-6">
              {aiFeatures.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-6 p-6 rounded-3xl glass border-white/5 hover:bg-white/10 transition-all group"
                >
                  <div className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{feature.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/15 blur-[120px] rounded-full animate-pulse" />
            
            <div className="glass border-white/10 rounded-[40px] p-10 aspect-square flex flex-col items-center justify-center overflow-hidden">
               {/* Animated Neural Network Visual */}
               <div className="relative w-full h-[70%]">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute border border-cyan-500/10 rounded-full"
                      style={{ 
                        width: `${(i + 1) * 20}%`, 
                        height: `${(i + 1) * 20}%`,
                        top: "50%",
                        left: "50%",
                        translate: "-50% -50%"
                      }}
                      animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{ duration: 15 + i * 8, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.div 
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#00f2ff]"
                        style={{ top: "0%", left: "50%", translate: "-50% -50%" }}
                      />
                    </motion.div>
                  ))}
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 180, 270, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-40 h-40 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(0,242,255,0.4)] relative"
                    >
                      <div className="absolute inset-2 border-2 border-white/20 rounded-full border-dashed animate-spin" />
                      <BrainCircuit size={80} className="text-white relative z-10" />
                    </motion.div>
                  </div>
               </div>
               
               <div className="mt-8 text-center">
                  <h4 className="text-2xl font-black font-space tracking-tighter">AI MESH ENGINE</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mt-2">Active Learning Protocol</p>
               </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 glass border-white/20 p-6 rounded-3xl max-w-[240px] shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck size={20} className="text-green-400" />
                <span className="text-[10px] font-black uppercase tracking-widest">Self-Audit Enabled</span>
              </div>
              <p className="text-[10px] text-gray-400 leading-relaxed">Neural detection autonomously flagged 14.2k potential infringements in the last 24h with 0.1% false positive rate.</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 glass border-white/5 rounded-[40px] bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent flex flex-col items-center text-center"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mb-8 rounded-full" />
          <h3 className="text-3xl font-black font-space mb-6">Innovation Roadmap 2025</h3>
          <div className="grid md:grid-cols-3 gap-12 w-full max-w-5xl">
            <div className="space-y-2">
              <span className="text-cyan-400 font-bold text-sm">Phase 01</span>
              <p className="font-bold">Generative Metadata</p>
              <p className="text-xs text-gray-500">Automating descriptive tagging for video content using multi-modal LLMs.</p>
            </div>
            <div className="space-y-2">
              <span className="text-purple-400 font-bold text-sm">Phase 02</span>
              <p className="font-bold">Real-time Royalty Tokenization</p>
              <p className="text-xs text-gray-500">Instant micro-payouts via neural asset verification layers.</p>
            </div>
            <div className="space-y-2">
              <span className="text-orange-400 font-bold text-sm">Phase 03</span>
              <p className="font-bold">Predictive Sync Licensing</p>
              <p className="text-xs text-gray-500">AI matchmaking between catalog assets and trending visual media.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIInnovation;
