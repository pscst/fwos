import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const loadingTexts = [
    'Initializing quantum processors...',
    'Loading neural networks...',
    'Establishing secure connections...',
    'Calibrating holographic displays...',
    'System ready. Welcome to the future.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setCurrentText(loadingTexts[randomIndex]);
    }, 600);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="cyber-grid absolute inset-0 opacity-20"></div>
      
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-32 h-32 mx-auto mb-8 relative"
        >
          <div className="absolute inset-0 border-4 border-cyan-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-2 border-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-futuristic font-bold text-cyan-400 glow-text">
              {progress}%
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4 glow-border"
          style={{ maxWidth: '300px', margin: '0 auto 1rem' }}
        />

        <motion.p
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 font-mono text-sm tracking-wider"
        >
          {currentText}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;