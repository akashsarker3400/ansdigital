
import React from 'react';
import { motion } from 'framer-motion';
import { SUB_COMPANIES } from '../constants';
import { ExternalLink } from 'lucide-react';
import ANSMusicLogo from '../assets/ansmusic_logo_white.svg';
import TuneViaLogo from '../assets/ans.jpg';
import ANSEnterpriseLogo from '../assets/ans.svg';



const SubCompanies: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4 block">Corporate Structure</span>
            <h2 className="text-4xl md:text-5xl font-black font-space">The ANS <span className="text-gradient">Portfolio</span></h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed">
            Our multi-company ecosystem allows us to provide specialized services across different sectors of the music and technology industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SUB_COMPANIES.map((company, idx) => (
            <motion.a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-[20px] opacity-0 group-hover:opacity-100 transition-all rounded-[32px]" />
              <div className="h-full glass border-white/5 p-10 rounded-[32px] hover:border-white/20 transition-all flex flex-col items-start relative z-10">
                {company.name === 'ANS Music' && (
  <img
    src={ANSMusicLogo}
    alt="ANS Music"
    className="h-8 w-auto object-contain"
  />
)}

{company.name === 'Tune Via' && (
  <img
    src={TuneViaLogo}
    alt="Tune Via"
    className="h-8 w-auto object-contain"
  />
)}

{company.name === 'ANS Enterprise LLC' && (
  <img
    src={ANSEnterpriseLogo}
    alt="ANS Enterprise LLC"
    className="h-8 w-auto object-contain"
  />
)}


                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  {company.name}
                  <ExternalLink size={16} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-10 flex-grow">
                  {company.description}
                </p>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 opacity-0 group-hover:opacity-100 transition-all">
                  Visit Website
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubCompanies;
