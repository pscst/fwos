import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiPlay } from 'react-icons/fi';


import arduino from '../assets/projects/arduino.jpg';
import arms from '../assets/projects/arms.png';
import sims from '../assets/projects/sims.png';
import csm from '../assets/projects/csm.jpg';

const Projects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Voice-Activated Lights Using Dabble App (Bluetooth)',
      description: 'Voice-controlled lighting system using smartphone voice commands.',
      longDescription: 'The Dabble app captures voice input, converts it to text, and sends commands via Bluetooth to the Arduino to control LED patterns and behaviors.',
      image: arduino,
      technologies: ['Arduino Uno', 'HC-05 Bluetooth module', 'C++'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Arduino'
    },
    {
      id: 2,
      title: 'Assessment Request Management System',
      description: 'TESDA system to manage and track assessment requests.',
      longDescription: 'Built for TESDA, this system improves tracking, approval workflows, scheduling, and monitoring of assessment requests.',
      image: arms,
      technologies: ['HTML5', 'CSS3', 'Chart.js', 'PHP', 'MySQL', 'JavaScript'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Web-Application'
    },
    {
      id: 3,
      title: 'Sales and Inventory Management System',
      description: 'Tracks sales, inventory, and suppliers with integrated SMS alerts.',
      longDescription: 'A system for tracking sales, inventory, and supplier transactions. Includes SMS notifications for streamlined supplier communications and improved accuracy.',
      image: sims,
      technologies: ['HTML5', 'CSS3', 'Chart.js', 'PHP', 'MySQL', 'JavaScript', 'SMS API'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Web-Application'
    },
    {
      id: 4,
      title: 'Chainsaw Man Website (Replica)',
      description: 'A replica fan site with responsive design.',
      longDescription: 'A responsive replica website for Chainsaw Man featuring animations and mobile-first layout.',
      image: csm,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Website'
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className={`py-20 rounded-t-full  ${darkMode ? "bg-gray-800/70" : "bg-gray-100 "}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-base font-semibold ${darkMode ? 'text-cyan-400 glow-text' : 'text-gray-600'}`}>
            {'<Projects/>'}
          </h2>
          <p className={`mt-2 max-w-lg mx-auto text-4xl font-semibold tracking-tight sm:text-5xl ${darkMode ? 'text-zinc-300' : 'text-gray-950'}`}>
            Development <span className={`${darkMode ? 'text-cyan-400 glow-text' : 'text-gray-800'}`}>Projects</span>
          </p>
          <div className={`w-20 h-1 mx-auto rounded-full mb-8 ${
            darkMode ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'
          }`}></div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${darkMode ? 'glass-morphism' : 'bg-white shadow-lg hover:shadow-xl'}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative group overflow-hidden h-48">      
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110" />
                  <p
                    className={`absolute left-[50%] top-20 transform -translate-x-1/2 text-xl font-bold 
                    opacity-0 group-hover:opacity-80
                    group-hover:bg-black group-hover:bg-opacity-10
                    px-4 py-2 rounded-xl transition-all duration-300 z-10                
                      ${darkMode ? 'bg-gradient-to-r from-blue-600 via-cyan-400/60 to-blue-400 text-white' : 'bg-gradient-to-r from-gray-800 via-gray-800/10 to-gray-800 text-white'}`}
                    >
                    {project.category}
                    </p>
                    
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0"/>
                
                </div>

                <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse' : 'text-gray-900'}`}>
                        {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.slice(0, 7).map(tech => (
                        <span key={tech} className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-gray-800/60 text-neutral-100'}`}>
                            {tech}
                        </span>
                        ))}
                    </div>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>

                  <div className="flex items-center justify-between mt-4">
                    <motion.button whileHover={{ scale: 1.05 }} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${darkMode ? 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30' : 'bg-gray-800/90 text-neutral-100 hover:bg-gray-950'} cursor-pointer `} onClick={() => setSelectedProject(project)}>
                      <FiPlay size={16} /> View Details
                    </motion.button>
                    <div className="flex gap-2">
                      <motion.a href={project.githubUrl} whileHover={{ scale: 1.1 }} className={`p-2 rounded-lg ${darkMode ? 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}><FiGithub size={20} /></motion.a>
                      <motion.a href={project.liveUrl} whileHover={{ scale: 1.1 }} className={`p-2 rounded-lg ${darkMode ? 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}><FiExternalLink size={20} /></motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} onClick={(e) => e.stopPropagation()} className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${darkMode ? 'bg-gray-900 border border-cyan-500/20' : 'bg-white'}`}>
                <div className="relative">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover object-top" />
                  <button onClick={() => setSelectedProject(null)} className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? 'bg-gray-800/80 text-white' : 'bg-white/80 text-gray-800'}`}><FiX size={20} /></button>
                </div>

                <div className="p-8">
                  <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedProject.title}</h3>
                  <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{selectedProject.longDescription}</p>
                  <div className="mb-6">
                    <h4 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'opacity-70 bg-gradient-to-r from-gray-800 via-gray-800 to-gray-800 text-white'}`}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.a href={selectedProject.githubUrl} whileHover={{ scale: 1.05 }} className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-gray-800 text-white border border-gray-700 hover:border-cyan-500' : 'bg-gray-100 text-gray-800 border border-gray-300 hover:border-gray-400'}`}><FiGithub size={20} /> View Code</motion.a>
                    <motion.a href={selectedProject.liveUrl} whileHover={{ scale: 1.05 }} className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-cyan-500 text-white hover:bg-cyan-600' : 'bg-gray-700 text-white hover:bg-gray-950'}`}><FiExternalLink size={20} /> Live Demo</motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
