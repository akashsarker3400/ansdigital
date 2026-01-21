
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AIInnovation from './components/AIInnovation';
import Solutions from './components/Solutions';
import Partners from './components/Partners';
import SubCompanies from './components/SubCompanies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ApiDocs from './components/ApiDocs';

// New Page Components
import AboutPage from './components/AboutPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import Logo from './assets/ans_digital_logo_white.png';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle back to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-cyan-500 selection:text-black">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      <AnimatePresence>
  {isLoading ? (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        {/* এখানে আপনার Logo বসানো হয়েছে */}
        <img 
          src={Logo} 
          alt="ANS Digital Logo" 
          className="h-16 md:h-20 w-auto object-contain" 
        />
      </motion.div>

      {/* Progress Bar */}
      <motion.div 
        className="mt-8 h-[2px] w-48 bg-gray-800 overflow-hidden rounded-full"
      >
        <motion.div 
          className="h-full bg-cyan-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </motion.div>
      <p className="mt-4 text-gray-500 text-sm tracking-widest uppercase font-space">
        Initializing Core Systems
      </p>
    </motion.div>
  ) : null}
</AnimatePresence>

      <Navbar navigate={navigate} />
      
      <main className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero />
              <About />
              <Services />
              <AIInnovation />
              <Solutions />
              <Partners />
              <SubCompanies />
              <Contact />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <AboutPage />
            </motion.div>
          )}

          {currentPage === 'privacy' && (
            <motion.div
              key="privacy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <PrivacyPolicy />
            </motion.div>
          )}

          {currentPage === 'terms' && (
            <motion.div
              key="terms"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <TermsOfService />
            </motion.div>
          )}

          {currentPage === 'cookies' && (
            <motion.div
              key="cookies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <CookiePolicy />
            </motion.div>
          )}
          {currentPage === 'api-docs' && (
            <motion.div
              key="api-docs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ApiDocs />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer navigate={navigate} />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20" />
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-cyan-600/10 rounded-full blur-[100px]" />
      </div>
    </div>
  );
};

export default App;
