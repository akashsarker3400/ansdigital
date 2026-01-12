
import React, { useState, useEffect } from 'react';
// Import AnimatePresence from framer-motion
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from '../assets/ans_digital_logo_white.png';


interface NavbarProps {
  navigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Company', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'Partners', href: '#partners', id: 'partners' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    // If it's a real page ID, use routing, otherwise use scroll for same-page anchors
    if (id === 'about-page') {
      e.preventDefault();
      navigate('about');
    } else if (id === 'home') {
      e.preventDefault();
      navigate('home');
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'py-4 glass border-b shadow-2xl' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  onClick={(e) => handleNavClick(e, 'home')}
  className="flex items-center gap-3 group cursor-pointer"
>
  <img
    src={Logo}
    alt="ANS Digital"
    className="h-10 md:h-12 w-auto cursor-pointer transition-transform hover:scale-110"
  />
</motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => navigate('about')}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full" />
          </button>
          {navLinks.filter(l => l.id !== 'about').map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              onClick={() => navigate('home')}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => navigate('home')}
            className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-cyan-400 transition-all flex items-center gap-2 group"
          >
            Partner With Us
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <button 
                onClick={() => { navigate('about'); setMobileMenuOpen(false); }}
                className="text-left text-lg font-medium text-gray-300 hover:text-cyan-400"
              >
                About Us
              </button>
              {navLinks.filter(l => l.id !== 'about').map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => { navigate('home'); setMobileMenuOpen(false); }}
                  className="text-lg font-medium text-gray-300 hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => { navigate('home'); setMobileMenuOpen(false); }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-center"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
