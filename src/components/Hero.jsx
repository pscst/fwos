import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Canvas } from '@react-three/fiber';
import { Cat } from './Cat';
import { Suspense } from 'react';



const Hero = ({ darkMode }) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Developer', 'Problem Solver', 'Tech Enthusiast'];
  const fullText = roles[currentIndex];

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [text, fullText, currentIndex]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          darkMode
          ? 'bg-gradient-to-br from-gray-950 via-gray-800/20 to-slate-900/20'
          : 'bg-gradient-to-br from-sky-50/20 via-slate-100/20 to-gray-200/20'

        }`}></div>
        <div className="cyber-grid absolute inset-0 opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-45 h-45 mx-auto mb-8 relative lg:w-70 md:w-60 sm:w-45 lg:h-70 md:h-60 sm:h-45">
            
                <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-44 h-44 lg:w-64 md:w-54 sm:w-44 lg:h-64 md:h-54 sm:h-44 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1">
                    <div
                    className={`w-full h-full rounded-full ${
                        darkMode ? 'bg-gray-900' : 'bg-white'
                    } overflow-hidden flex items-center justify-center`}
                    >
                    <div className="w-full h-full">
                    <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[2, 2, 2]} />
                    <Suspense fallback={null}>
                      <Cat scale={1.2} position={[0, -0.2, 0]} />
                    </Suspense>
                  </Canvas>
                    </div>
                    </div>
                </div>
                </div>

                <div
                className="absolute -inset-4 rounded-full"
                style={{
                  animation: 'spin 8s linear infinite',
                  background: 'linear-gradient(to right, #06b6d4, #a855f7, #ec4899)',
                  maskImage: 'radial-gradient(closest-side, transparent 70%, black)',
                  opacity: '15%'
                }}
              ></div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-3xl lg:text-6xl md:text-5xl sm:text-3xl font-futuristic font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            
            <span className={`${darkMode ? 'text-cyan-400 glow-text' : 'text-gray-800 '}`}>
            {'<'}Fwos{'/>'}
            </span>
            
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="h-12 mb-3 "
          >
            <span 
            className={`text-xl lg:text-3xl md:text-2xl sm:text-xl font-medium ${
              darkMode ? 'text-white' : 'text-blue-950'
            }`}>
              A Future-Ready{' '}
              <span className="inline-block min-w-[200px] text-left">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className={`text-s lg:text-xl md:text-lg sm:text-s mb-8 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-950'
            }`}
          >
            Turning Ideas Into Code | Exploring Tomorrow's Tech Today
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(21, 0, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className={`px-6 py-2 lg:px-8 md:px-6 sm:px-4 lg:py-3 md:py-2 sm:py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                darkMode 
                  ? 'bg-gradient-to-r from-sky-950 to-gray-900 text-white glow-border pulse-glow' 
                  : 'bg-gradient-to-r from-sky-950 to-gray-900 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              Explore My Work
            </motion.button>

            <div className="flex items-center space-x-4">
              {[
                { icon: FiLinkedin, href: 'https://www.linkedin.com', label: 'LinkedIn', external: true },
                { icon: FiMail, href: '#contact', label: 'Email', external: false },
                { icon: FiGithub, href: 'https://github.com/pscst', label: 'Github', external: true }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full border transition-all duration-300 ${
                    darkMode 
                      ? 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-700' 
                      : 'border-blue-400/40 text-blue-900 hover:bg-blue-50 hover:border-blue-900'
                  }`}
                  title={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        >
          <FiArrowDown className={`text-2xl ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;