import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiZap, FiHeart } from 'react-icons/fi';

import { Globe } from "../components/globe";
import BentoGrid from './bentoGrid'

const About = ({ darkMode }) => {



  return (
    <section id="about" className={`py-10 ${darkMode ? 'bg-gray-900/40' : 'bg-white/20'}`}>

      <BentoGrid darkMode={darkMode}/>

    </section>
  );
};

export default About;