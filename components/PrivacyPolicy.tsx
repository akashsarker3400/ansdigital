
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-12 rounded-[40px] border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-10">
             <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                <ShieldCheck className="text-cyan-400" size={28} />
             </div>
             <h1 className="text-4xl font-black font-space text-gradient">Privacy Policy</h1>
          </div>
          
          <div className="prose prose-invert max-w-none space-y-8 text-gray-400 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>At ANS Digital, we collect information to provide better services to all our users. We collect data in two ways:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Information you give us:</strong> Personal identification information such as name, email address, and company details when you inquire about our white-label SaaS or distribution services.</li>
                <li><strong>Information we get from your use of our services:</strong> Technical logs, device information, IP address, and platform usage metrics to optimize our global CDN and API delivery.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use of Information</h2>
              <p>We use the information we collect to provide, maintain, protect and improve our media infrastructure, to develop new solutions, and to protect ANS Digital and our users.</p>
              <p>This includes processing royalties, verifying content ownership, and auditing distribution logs for enterprise compliance.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
              <p>We work hard to protect ANS Digital and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. Specifically:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>We encrypt many of our services using SSL/TLS.</li>
                <li>We review our information collection, storage and processing practices to guard against unauthorized access to systems.</li>
                <li>We restrict access to personal information to ANS Digital employees, contractors and agents who need to know that information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Compliance and Cooperation</h2>
              <p>We regularly review our compliance with our Privacy Policy. We also adhere to several self-regulatory frameworks, including GDPR and CCPA protocols where applicable to our global distribution operations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact our Data Protection Officer at <strong>privacy@ansdigital.com</strong>.</p>
            </section>

            <div className="pt-10 border-t border-white/5 text-[10px] uppercase tracking-widest font-bold text-gray-600">
              <p>Last Revised: October 24, 2023</p>
              <p>ANS Enterprise LLC | Wyoming, USA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
