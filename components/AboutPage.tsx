
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Globe, Shield, History, Award, Zap, Cpu } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#050505] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-8xl font-black font-space mb-8 leading-none">Architecting the <br /><span className="text-gradient">Digital Media</span> Era</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Founded at the intersection of media arts and advanced computation, ANS Digital is the global infrastructure engine for modern content economies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[40px] border-white/10 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all" />
            <h2 className="text-3xl font-bold font-space mb-6">Our Core Mission</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              ANS Digital was established to solve the fragmentation of media distribution. We provide a unified, enterprise-grade technology stack that protects creators' rights while maximizing their global commercial potential.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 flex flex-col items-center group-hover:bg-white/10 transition-colors">
                <Target className="text-cyan-400 mb-2" size={24} />
                <span className="text-[9px] font-bold uppercase tracking-widest">Precision</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 flex flex-col items-center group-hover:bg-white/10 transition-colors">
                <Globe className="text-purple-400 mb-2" size={24} />
                <span className="text-[9px] font-bold uppercase tracking-widest">Global</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 flex flex-col items-center group-hover:bg-white/10 transition-colors">
                <Shield className="text-green-400 mb-2" size={24} />
                <span className="text-[9px] font-bold uppercase tracking-widest">Secure</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Founded", val: "2018", color: "cyan" },
              { label: "Platforms", val: "150+", color: "purple" },
              { label: "Assets", val: "50M+", color: "orange" },
              { label: "Uptime", val: "99.9%", color: "green" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-white/5 text-center hover:border-white/20 hover:bg-white/5 transition-all"
              >
                <h3 className={`text-4xl font-black font-space text-${stat.color}-400 mb-2`}>{stat.val}</h3>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space mb-4">Corporate Ecosystem</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[40px] border-white/5 text-center group hover:bg-white/5 transition-all shadow-xl"
            >
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,242,255,0.1)]">
                <Award className="text-cyan-400" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">ANS Enterprise LLC</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Our USA-based strategic hub in Wyoming, managing global IP compliance and auditing for international markets.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[40px] border-white/5 text-center group hover:bg-white/5 transition-all shadow-xl"
            >
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(112,0,255,0.1)]">
                <History className="text-purple-400" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">ANS Music</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Pioneering direct-to-fan distribution and creative content strategies for independent artists worldwide.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[40px] border-white/5 text-center group hover:bg-white/5 transition-all shadow-xl"
            >
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,165,0,0.1)]">
                <Users className="text-orange-400" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Tune Via</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Advanced sync licensing engine and creative media matching technology for visual media integration.</p>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-16 rounded-[50px] border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-600/5 to-cyan-500/5 pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/10 blur-[100px]" />
          
          <h2 className="text-4xl font-bold font-space mb-6 relative z-10">Pioneering Innovation</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 relative z-10 text-lg">
            We are not just a media provider; we are a technology lab. From neural content analysis to real-time royalty tokenization, we build the future today.
          </p>
          <div className="flex justify-center gap-4 relative z-10">
            <Zap className="text-cyan-400 animate-pulse" />
            <div className="w-32 h-[1px] bg-white/10 self-center" />
            <Cpu className="text-purple-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
