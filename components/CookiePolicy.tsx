
import React from 'react';
import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-12 rounded-[40px] border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-10">
             <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                <Cookie className="text-orange-400" size={28} />
             </div>
             <h1 className="text-4xl font-black font-space text-gradient">Cookie Policy</h1>
          </div>
          
          <div className="prose prose-invert max-w-none space-y-8 text-gray-400 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What are Cookies?</h2>
              <p>Cookies are small pieces of data stored on your browser when you visit our site. We use them to remember your login status for our dashboards, store your language preferences, and analyze our traffic.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-4 mt-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <h4 className="text-white font-bold mb-1">Essential Cookies</h4>
                  <p className="text-xs">Necessary for you to log in to your ANS Digital dashboard and access secure areas of our white-label SaaS.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <h4 className="text-white font-bold mb-1">Performance Cookies</h4>
                  <p className="text-xs">Used to monitor the speed of our media delivery and API response times across different global regions.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <h4 className="text-white font-bold mb-1">Third-Party Cookies</h4>
                  <p className="text-xs">Integrated from partners like Google Analytics and YouTube to track content performance and streaming metrics.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Managing Cookies</h2>
              <p>Most browsers allow you to control cookies through their settings. If you block essential cookies, certain features of our media management tools may not function correctly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Updates to this Policy</h2>
              <p>We may update this policy to reflect changes in our technology or legal requirements. We encourage you to review this page periodically.</p>
            </section>

            <div className="pt-10 border-t border-white/5 text-[10px] uppercase tracking-widest font-bold text-gray-600">
              <p>Cookie Protocol v1.4 | Updated Oct 2023</p>
              <p>Contact: compliance@ansdigital.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
