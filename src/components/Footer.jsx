

import { FiLinkedin, FiYoutube, FiGithub } from "react-icons/fi";

const mySocials = [
 
    {
      name: "Linkedin",
      href: "https://www.linkedin.com",
      icon: FiLinkedin,
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@smthrns9166",
        icon: FiYoutube,
    },
    {
        name: "GitHub",
        href: "https://github.com/frosdc",
        icon: FiGithub,
    },,

  ];
  const Footer = ({ darkMode }) => {
    return (
      <section className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4 py-6 text-sm c-space text-center md:text-left">
        
        {/* Top Divider Line */}
        <div className={`w-full h-[1px] my-2 ${darkMode 
          ? "bg-gradient-to-r from-transparent via-neutral-200/80 to-transparent" 
          : "bg-gradient-to-r from-transparent via-gray-600 to-transparent"}`}/>
        
        {/* Made With Text */}
        <div className={`${darkMode ? "text-neutral-200/60" : "text-gray-800"}`}>
          <p>Made with React JS + Vite and Tailwind CSS |</p>
        </div>
  
        {/* Social Icons */}
        <div className="flex gap-3 flex-wrap justify-center md:justify-start">
          {mySocials.map((social, index) => (
            <a href={social.href} key={index} target="_blank">
              <div className={`w-5 h-5 ${darkMode ? "text-neutral-200/60" : "text-gray-800"}`}>
                <social.icon size={20} />
              </div>
            </a>
          ))}
        </div>
  
        {/* Copyright Text */}
        <p className={`${darkMode ? "text-neutral-200/60" : "text-gray-800"}`}>
          | © 2025 All Rights Reserved.
        </p>
      </section>
    );
  };
  

export default Footer;
