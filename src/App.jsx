import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {motion, AnimatePresence} from 'framer-motion'
import Hero from './components/Hero';
import About from './components/About';
import LoadingScreen from './components/loadingScreen';
import ParticleBackground from './components/particleBg'
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Footer  from './components/Footer';




function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };


  return (

    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900' : "bg-gray-200"}`}>
    <AnimatePresence>
        {loading && <LoadingScreen />}
    </AnimatePresence>
    {!loading && (
      <>
    <ParticleBackground darkMode={darkMode}/>
    
    <main className='relative z-10 overflow-x-hidden'>
    <Hero darkMode={darkMode} toggleTheme={toggleTheme}/>
    <About darkMode={darkMode}/>
    <Projects darkMode={darkMode}/>
    <Contact darkMode={darkMode}/>
    <Footer darkMode={darkMode}/>
    </main>
    </>
    )}
    </div>
 
  )
}

export default App
