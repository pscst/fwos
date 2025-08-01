

import { FiLinkedin, FiYoutube } from "react-icons/fi";

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

  ];
const Footer = ({ darkMode }) => {

return(
    <>
    <section className="flex flex-wrap items-center justify-between gap-2 py-6 text-sm  c-space">



        <div className={`m-4  ${darkMode ? "bg-gradient-to-r from-transparent via-neutral-200/80 to-transparent" : "bg-gradient-to-r from-transparent via-gray-600 to-transparent"}  h-[1px] w-full`}/>

        <div className={`${darkMode ? "text-neutral-200/60 "  : "text-gray-800 "}`}>
            <p>Made with React JS and Tailwind CSS |</p>
           
        </div>
        <div className="flex gap-3">

        {mySocials.map((social, index)=>(
        <a href={social.href} key={index} target="_blank">
           <div className={`w-f h-5 ${darkMode ? "text-neutral-200/60 "  : "text-gray-800 "}`} >
           <social.icon 
           size={20}
           />
           </div>

        </a>))}
        </div>
        <p className={`${darkMode ? "text-neutral-200/60 "  : "text-gray-800 "}`}>| © 2025 All Rights Reserved.</p>
    </section>
    </>
)
}

export default Footer;