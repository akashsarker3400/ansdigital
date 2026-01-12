
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, BarChart, Zap, Globe, Lock } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Creators Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-4 block">For Content Creators & Artists</span>
            <h2 className="text-4xl md:text-5xl font-black font-space mb-8">Unlocking Global <br /> Revenue Potential</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We provide independent creators with major-label grade technology. Our systems automate the tedious work of metadata validation, rights registration, and distribution, allowing you to focus on your creative output.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <BarChart className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Royalty Transparency</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Detailed breakdowns of every stream, download, and sync across the globe.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <ShieldCheck className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Asset Protection</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Automated takedowns of unauthorized uploads to protect your IP value.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Zap className="text-green-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Instant Distribution</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Deliver your content to 150+ platforms within minutes of submission.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <Globe className="text-orange-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Multi-market Reach</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Optimization for emerging markets in Asia, Africa, and Latin America.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full" />
            <div className="glass border-white/10 rounded-[40px] p-4 relative">
              <img 
                src="https://picsum.photos/id/1/800/600" 
                alt="Creator Ecosystem" 
                className="rounded-[32px] w-full h-[400px] object-cover opacity-80"
              />
              <div className="absolute bottom-10 left-10 p-6 glass rounded-2xl border-white/20 animate-float max-w-xs">
                <p className="text-xs font-bold uppercase text-purple-400 mb-2">Live Status</p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-lg font-bold">128k New Streams</span>
                </div>
                <p className="text-xs text-gray-400">Real-time content performance monitoring active across 80+ countries.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enterprise Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full" />
            <div className="glass border-white/10 rounded-[40px] p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center">
                   <Cpu className="text-cyan-400 mb-4" size={32} />
                   <h5 className="font-bold">API Mesh</h5>
                   <p className="text-[10px] text-gray-500 mt-2">v4 Core Integrated</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center">
                   <Lock className="text-purple-400 mb-4" size={32} />
                   <h5 className="font-bold">Audit Ready</h5>
                   <p className="text-[10px] text-gray-500 mt-2">Compliance Level 3</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center col-span-2">
                   <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black font-space">99.9%</span>
                      <span className="text-xs text-green-400 uppercase">Uptime</span>
                   </div>
                   <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest">Enterprise SLA Guaranteed</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Total Asset Ingestion</span>
                  <span className="font-bold">2.4 PB / Month</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full mt-2">
                  <div className="w-[75%] bg-cyan-500 h-full rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4 block">For Media Enterprises</span>
            <h2 className="text-4xl md:text-5xl font-black font-space mb-8">Infrastructure for <br /> Large Scale Media</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              ANS Digital provides white-label SaaS solutions and robust API infrastructure for media conglomerates, record labels, and distribution giants. Our platforms are designed to handle millions of assets with enterprise-grade reliability.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-xs">1</div>
                <span className="text-gray-300 font-medium">Customizable white-label storefronts and dashboards.</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-xs">2</div>
                <span className="text-gray-300 font-medium">High-throughput ingestion with auto-transcoding.</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-xs">3</div>
                <span className="text-gray-300 font-medium">SOC-2 compliant data security and multi-tenant isolation.</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-xs">4</div>
                <span className="text-gray-300 font-medium">Global tax compliance and automated royalty payments.</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
