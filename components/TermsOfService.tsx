
import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-12 rounded-[40px] border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-10">
             <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <FileText className="text-purple-400" size={28} />
             </div>
             <h1 className="text-4xl font-black font-space text-gradient">Terms of Service</h1>
          </div>
          
          <div className="prose prose-invert max-w-none space-y-8 text-gray-400 leading-relaxed">
            <p className="text-sm italic">Please read these Terms of Service carefully before using the ANS Digital media infrastructure.</p>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance</h2>
              <p>By accessing the services provided by ANS Digital and its sub-entities (ANS Music, Tune Via, ANS Enterprise LLC), you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Service License</h2>
              <p>ANS Digital grants you a limited, non-exclusive, non-transferable license to access and use our white-label SaaS and API tools for the sole purpose of media distribution and management. You may not:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Reverse engineer any part of our neural content detection engine.</li>
                <li>Use the platform for any illegal content distribution.</li>
                <li>Bypass any security measures implemented on our global CDN.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property Rights</h2>
              <p>You retain ownership of all content you upload to our platform. However, by uploading content, you grant ANS Digital the necessary rights to distribute and protect that content across our partner network (YouTube, Vevo, Spotify, etc.).</p>
              <p>All technology, code, design, and trademarks associated with ANS Digital remain the property of ANS Enterprise LLC.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Liability Limitation</h2>
              <p>ANS Digital shall not be liable for any indirect, special, or consequential damages. We provide our infrastructure on an "as-is" basis, with SLA guarantees provided only via separate enterprise contracts.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
              <p>These terms are governed by and construed in accordance with the laws of the State of Wyoming, USA, without regard to its conflict of law provisions.</p>
            </section>

            <div className="pt-10 border-t border-white/5 text-[10px] uppercase tracking-widest font-bold text-gray-600">
              <p>Revision 2.1 | Effective Date: October 2023</p>
              <p>Registered Entity: ANS Enterprise LLC, Sheridan, WY</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
