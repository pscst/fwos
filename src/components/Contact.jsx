import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const serviceID = 'service_g46mlro';
    const templateID = 'template_sf1kmtg';
    const publicKey = 'BJdhcjbz0IwPuT4g9';
  
    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // const contactInfo = [
  //   {
  //     icon: FiMail,
  //     label: 'Email',
  //     value: 'mailto:pscs0000@gmail.com',
  //     href: 'mailto:pscs0000@gmail.com'
  //   },
  //   {
  //     icon: FiPhone,
  //     label: 'Phone',
  //     value: '',
  //     href: ''
  //   },
  //   {
  //     icon: FiMapPin,
  //     label: 'Location',
  //     value: '',
  //     href: '#'
  //   }
  // ];

  return (
    <section id="contact" className={`py-20  backdrop-blur-2xl ${darkMode ? 'bg-gray-90/80' : 'bg-white/20'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-center text-base/7 font-semibold  ${darkMode ? 'text-cyan-400 glow-text' : 'text-gray-600'}`}>{`<ContactMe/>`}</h2>
        <p className={`mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl ${darkMode ? "text-zinc-300" : "text-gray-950"}`}>
          Send Me an <span className={`${darkMode ? 'text-cyan-400 glow-text' : 'text-gray-800 '}`}>Email</span> !
        </p>

          <div className={`w-20 h-1 mx-auto rounded-full mb-8 ${
            darkMode ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'
          }`}></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 justify-items-center">
    
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-2 sm:px-0 w-full max-w-xl md:max-w-2xl mx-auto"
          >
             <div className={`p-6 sm:p-6 md:p-8 rounded-2xl max-w-xs sm:max-w-full mx-auto  ${
              darkMode ? 'glass-morphism glow-border' : 'bg-gray-50 border border-gray-200'
            }`}>
              <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Send a Message
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    darkMode ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-green-100 text-green-600 border border-green-200'
                  }`}
                >
                  <FiCheck size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6 sm:grid-cols-2">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 ${
                        darkMode 
                          ? 'bg-gray-800 border-gray-600 text-white focus:ring-cyan-500 focus:border-cyan-500' 
                          : 'bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 ${
                        darkMode 
                          ? 'bg-gray-800 border-gray-600 text-white focus:ring-cyan-500 focus:border-cyan-500' 
                          : 'bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white focus:ring-cyan-500 focus:border-cyan-500' 
                        : 'bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full p-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white focus:ring-cyan-500 focus:border-cyan-500' 
                        : 'bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`w-full p-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? darkMode
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : darkMode 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg glow-border' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;