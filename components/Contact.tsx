
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black font-space mb-8">Ready to <br /> <span className="text-gradient">Upgrade?</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Whether you are an enterprise looking for a white-label partner or a high-growth creator, our team is ready to architect your digital future.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center text-cyan-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Inquiries</h4>
                  <p className="text-gray-500">info@ans.digital</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center text-purple-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">USA Headquarters</h4>
                  <p className="text-gray-500">ANS Enterprise LLC<br />30 N Gould St Ste R, Sheridan, WY 82801</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center text-orange-400">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Global Presence</h4>
                  <p className="text-gray-500">Active operations in US, Europe, and Asia.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass border-white/10 rounded-[40px] p-10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 px-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 px-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 px-2">Interest</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-all appearance-none">
                  <option className="bg-[#050505]">White-Label SaaS</option>
                  <option className="bg-[#050505]">Vevo/YouTube Management</option>
                  <option className="bg-[#050505]">Copyright Protection</option>
                  <option className="bg-[#050505]">Strategic Partnership</option>
                  <option className="bg-[#050505]">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 px-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-all resize-none"
                />
              </div>

              <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-3">
                Send Request
                <Send size={20} />
              </button>
              
              <p className="text-[10px] text-center text-gray-500 uppercase tracking-widest">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-purple-600/5 blur-[150px] -z-10" />
    </section>
  );
};

export default Contact;
