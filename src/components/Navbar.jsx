import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import {FiMenu, FiX, FiSun, FiMoon} from "react-icons/fi";

const Navbar = ({darkMode, toggleTheme}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const sunMoonProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
    onClick:toggleTheme, 
    className: darkMode
      ? "border-cyan-500/30 text-cyan-400 hover:bg-cyan-500"
      : "border-blue-200 text-blue-600 hover:bg-blue-50"
  };

  const headerProps = {
    initial: { y: -100 },
    animate: {y: 0},
    className: scrolled
    ? darkMode ? 
    'bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20' :
    'bg-white/80 backdrop-blur-md border-b border-gray-200' :
    'bg-transparent'
  };
  
  

  useEffect(()=>{

    const handleScroll = () =>{
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

    const menuItems =[
        {name: 'Home', href: '#hero'},
        {name: 'About', href: '#about'},
        {name: 'Projects', href: '#projects'},
        {name: 'Contact Me', href: '#contact'}
    ];

    const scrollToSection = (href) => {
      const element = document.querySelector(href);
      if(element){
        element.scrollIntoView({behavior: 'smooth'});
      }
      setIsOpen(false);
    };
  return (
    <>
  <motion.header {...headerProps}
  className='fixed top-0 left-0 right-0 z-50 transition-all duration-300'>

    <nav className={`container mx-auto px-6 py-4 ${darkMode ? "bg-gray-950/10 " : ""}`}>
      <div className='flex items-center justify-between'>
        <motion.div className='text-2xl font-futuristic font-bold'
        whileHover={{scale: 1.05}}
        >
          <a href="#home">
          <span className={`cursor-pointer ${darkMode ? 'text-cyan-400 glow-text' : 'text-gray-600'}`}>
            {'<FWOS/>'}
          </span>
          </a>
          </motion.div>

          {/*DEsktop*/}

          <div className='hidden md:flex items-center space-x-2'>
              {menuItems.map((item, index)=>(

                <motion.button 
                  className={`relative px-3 py-2 text-sm font-medium transition-colors group cursor-pointer ${darkMode ? "text-gray-300 hover:text-cyan-400" : "text-gray-600 hover:text-blue-600"}`}
                  key={item.name}
                  initial={{opacity: 0, y:-20}}
                  animate={{opacity: 1, y: 1}}
                  transition={{delay: index * 0.2}}
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                  <span 
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full 
                  ${ darkMode ? "bg-cyan-400" : "bg-blue-400"}`}> 
                  </span>
                </motion.button>
  
              ))}

              <motion.button {...sunMoonProps} className={`p-2 rounded-full border transition-colors`}
              >
                {darkMode ? <FiSun size={20} className='text-white'/>: <FiMoon size={20} />}
              </motion.button>
            </div>    

                 {/*mobile*/}    
                <div className='md:hidden flex items-center space-x-4'>
                <motion.button {...sunMoonProps}
                className={`p-2 rounded-full border transition-colors`}> 
                {darkMode ? <FiSun style={{ stroke: 'white', strokeWidth: 1 }} size={20}/> : <FiMoon size={20} />}
                </motion.button>


                <button onClick={() => setIsOpen(!isOpen)}
                className={`p-2 ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                    {isOpen ? <FiX size={24}/> : <FiMenu size={24}/>}
                </button>
            </div>
      </div>
      

      {/* {mobile menu} */}
      {isOpen && (

        <motion.div 
        initial ={{opacity: 0, height: 0}}
        animate={{opacity: 1, height: "auto"}}
        exit={{opacity: 0, height: 0}}
        className={`md:hidden mt-4 py-4 border-t ${darkMode ? 'border-cyan-500/20' : 'border-gray-200'}`}        
        >
          {menuItems.map((item) => (
            <button 
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors 
            ${darkMode ? "text-gray-300 hover:text-cyan-400" : "text-gray-600 hover:text-blue-600"
          }`}
            >
            {item.name}
            </button>

          ))}
        </motion.div>


      )}
    </nav>
  </motion.header>
    </>
  )
}

export default Navbar