import {motion} from 'framer-motion'
import Frameworks from "../components/Frameworks";
import { Globe } from "../components/globe";
import { GraduationCap } from 'lucide-react';
import { Illustrations } from './illustrations';


export default function BentoGrid({darkMode}) {
  return (
      <div className={`py-24 sm:py-32` }>
      <motion.div 
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8 }}
       viewport={{ once: true }}
      className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className={`text-center text-base/7 font-semibold  ${darkMode ? 'text-cyan-400 glow-text' : 'text-gray-600'}`}>{`<AboutMe/>`}</h2>
        <p className={`mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl ${darkMode ? "text-zinc-300" : "text-gray-950"}`}>
          Who <span className={`${darkMode ? 'text-cyan-400 glow-text' : 'text-gray-800 '}`}>am I</span> ?
        </p>
        <div className={`w-20 h-1 mx-auto rounded-full mb-8 ${
            darkMode ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'
          }`}></div>
        <div className={`${darkMode ? `backdrop-blur-sm bg-white/3 border-0 shadow-lg` : `backdrop-blur-sm bg-white/20`} rounded-xl p-8 shadow-lg mt-10 grid gap-4 sm:mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2`}>

          {/* grid 1 */}
          <div className="relative col-span-1 md:col-span-2 row-span-1 md:row-span-2">
            <div className={`absolute inset-px rounded-lg lg:rounded-l-4xl ${darkMode ? "bg-gradient-to-bl from-slate-900 to-gray-700" : "bg-white"}`} />

            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              <h1 className={`text-2xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Fros!
                </span>
              </h1>

              {/* {grad cap} */}
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className={`w-5 h-5 ria-hidden="true" ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}/>
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Magna Cum Laude Graduate
                </span>
              </div>
            
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Fresh Graduate in <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Bachelor of Science in Information Systems</span>, 
                with a passion for cutting-edge technology. I've dedicated myself to learn both front-end and back-end development.
              </p>

                <p className={`text-base leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              } pb-7`}>
                My journey began with curiosity about how digital experiences come to life, and it has evolved into a deep commitment to 
                <span className="font-medium text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"> building the future of web applications</span>.
              </p>
              </div>
                  <img
                    alt=""
                    src="/src/assets/coding-pov.png"
                    className="w-full h-auto object-cover max-h-20 sm:max-h-60 lg:max-h-50 left-20"
                  />
            </div>
          </div>

          {/* grid 2 */}
          <div className="relative row-span-1 md:row-span-2">
            <div className={`absolute inset-px rounded-lg ${darkMode ? "bg-gradient-to-bl from-slate-900 to-gray-700" : "bg-white"} max-lg:rounded-t-4xl flex-row`} />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <h1 className={`text-2xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Tech Stack
              </h1>
                <p className={`mt-2 max-w-lg text-sm/6  max-lg:text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'} pb-5`}>
                Through my
                <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> academic and project-based experience, </span>
              I’ve worked with various languages and tools to develop modern web applications.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2 md:pb-40">
              <div className="absolute -right-4 -bottom-4 w-40 h-40 md:w-48 md:h-48 pointer-events-none transform-gpu transition-transform duration-300 scale-50 sm:scale-60 md:scale-100 lg:scale-125">
              <Frameworks/>
              </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>

          {/* grid 3 */}
          <div className="relative row-span-1 md:row-span-2">
            <div className={`absolute inset-px rounded-lg ${darkMode ? "bg-gradient-to-bl from-slate-900 to-gray-700" : "bg-white"}`} />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <h1 className={`text-2xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Time Zone
              </h1>
              <p className={`mt-2 max-w-lg text-sm/6  max-lg:text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'} pb-5`}>
              I am based in
                <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> The Philippines, </span>
              and open to remote work.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
              <figure className="absolute left-[20%] top-[35%] sm:left-[25%] sm:top-[40%] md:left-[30%] md:top-[20%] lg:left-[35%] lg:top-[25%]">
              <Globe />
              </figure>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>

          {/* grid 4 */}
          <div className="relative col-span-1 md:col-span-2 md:row-span-2">
            <div className={`absolute inset-px rounded-lg max-lg:rounded-b-4xl lg:rounded-r-4xl ${darkMode ? "bg-gradient-to-bl from-slate-900 to-gray-700" : "bg-white"}`} />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              <h1 className={`text-2xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Illustrations
              </h1>
              <p className={`mt-2 max-w-lg max-lg:text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'} pb-5 text-lg`}>
                  My passion for
                  <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Art </span>
                  began as a hobby and now influences my approach to design and creativity.
                  </p>
              </div>
              <div className="relative w-full min-h-[200px] sm:min-h-[370px] max-w-full justify-items-center">
              <div className="absolute top-1 bottom-0 w-full">
              <div
                className={`relative w-full min-h-[200px] sm:min-h-[300px] max-w-full justify-items-center 
                  ${darkMode 
                    ? "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" 
                    : ""
                  }`
                }
              >

                  <div className="w-full flex flex-col items-center justify-center">
                    <Illustrations />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
  