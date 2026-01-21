
import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import Logo from '../assets/ans_digital_logo_white.png';

interface FooterProps {
  navigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 border-t border-white/5 relative bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          <div className="lg:col-span-4">
            <div className="flex items-center mb-8 cursor-pointer" onClick={() => navigate('home')}>
    <img 
      src={Logo} 
      alt="ANS Digital" 
      className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300" 
    />
  </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              Global media-technology company specializing in professional video, audio, and content-based digital solutions. Building the infrastructure for tomorrow's digital economy.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 transition-colors">
                <Twitter size={18} className="text-gray-400 hover:text-cyan-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-purple-500/10 transition-colors">
                <Instagram size={18} className="text-gray-400 hover:text-purple-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-blue-500/10 transition-colors">
                <Linkedin size={18} className="text-gray-400 hover:text-blue-400" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Solutions</h5>
            <ul className="space-y-4">
              <li><button onClick={() => navigate('home')} className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">White-Label SaaS</button></li>
              <li><button onClick={() => navigate('home')} className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Music Distribution</button></li>
              <li><button onClick={() => navigate('home')} className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Copyright ID</button></li>
              <li><button onClick={() => navigate('api-docs')} className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">ANS Music API Docs</button></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Ecosystem</h5>
            <ul className="space-y-4">
              <li><a href="https://ansmusiclimited.com/" target="_blank" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">ANS Music</a></li>
              <li><a href="https://tunevia.com/" target="_blank" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">Tune Via</a></li>
              <li><button onClick={() => navigate('home')} className="text-gray-500 hover:text-purple-400 text-sm transition-colors">ANS Enterprise</button></li>
              <li><button onClick={() => navigate('about')} className="text-gray-500 hover:text-purple-400 text-sm transition-colors">About Us</button></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h5 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Newsletter</h5>
            <p className="text-xs text-gray-500 mb-6">Receive strategic updates on the media-tech landscape.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all text-sm"
              />
              <button className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center hover:bg-cyan-400 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 grid md:grid-cols-2 gap-8">
          <div className="text-xs text-gray-500 space-y-2">
            <p>&copy; {currentYear} ANS Digital. All rights reserved.</p>
            <p>ANS Enterprise LLC | 30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 md:justify-end text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <button onClick={() => navigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => navigate('terms')} className="hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => navigate('cookies')} className="hover:text-white transition-colors">Cookie Policy</button>
            <button onClick={() => navigate('home')} className="hover:text-white transition-colors">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
