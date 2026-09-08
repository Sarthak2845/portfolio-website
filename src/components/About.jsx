import { motion } from "motion/react"
import projects from "../data/projects.js"

const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-10 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-purple-400 text-sm sm:text-base tracking-widest mb-3">// about.js</p>
          <h1 className="relative text-white/90 text-4xl sm:text-5xl lg:text-7xl font-medium transition-all duration-300 hover:text-white
                                         after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0
                                         after:bg-gradient-to-r after:from-purple-800 after:to-pink-500
                                         after:transition-all after:duration-300 hover:after:w-full">
            About Me
          </h1>
          <p className="text-white/50 text-sm sm:text-base mt-5 max-w-xl mx-auto">
            Building intelligent, full-stack systems — one clean commit at a time.
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="animated-border rounded-2xl overflow-hidden border border-white/10 bg-[#080a10]/80 backdrop-blur-lg shadow-2xl">
            {/* Terminal top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs sm:text-sm text-white/40 font-mono">~/about/profile.js</span>
            </div>

            {/* Code body */}
            <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm leading-7 sm:leading-8 overflow-x-auto">
              <p className="whitespace-pre">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-300">sarthak</span>{" "}
                <span className="text-white/40">=</span>{" "}
                <span className="text-white/40">{"{"}</span>
              </p>

              <p className="whitespace-pre pl-4">
                <span className="text-cyan-300">role</span>
                <span className="text-white/40">:</span>{" "}
                <span className="text-orange-300">"Software Engineering Student"</span>
                <span className="text-white/40">,</span>
              </p>

              <p className="whitespace-pre pl-4">
                <span className="text-cyan-300">currentlyAt</span>
                <span className="text-white/40">:</span>{" "}
                <span className="text-orange-300">"Bajaj Finserv Health"</span>
                <span className="text-white/40">,</span>
              </p>

              <p className="whitespace-pre pl-4">
                <span className="text-cyan-300">education</span>
                <span className="text-white/40">:</span>{" "}
                <span className="text-orange-300">"B.E. Computer Engineering"</span>
                <span className="text-white/40">,</span>
              </p>

              <p className="whitespace-pre pl-4">
                <span className="text-cyan-300">languages</span>
                <span className="text-white/40">:</span>{" "}
                <span className="text-white/40">[</span>
                <span className="text-orange-300">"C++"</span><span className="text-white/40">, </span>
                <span className="text-orange-300">"Python"</span><span className="text-white/40">, </span>
                <span className="text-orange-300">"JavaScript"</span><span className="text-white/40">, </span>
                <span className="text-orange-300">"TypeScript"</span>
                <span className="text-white/40">],</span>
              </p>

              <p className="whitespace-pre pl-4">
                <span className="text-cyan-300">stack</span>
                <span className="text-white/40">:</span>{" "}
                <span className="text-white/40">[</span>
                <span className="text-orange-300">"React"</span><span className="text-white/40">, </span>
                <span className="text-orange-300">"Node.js"</span><span className="text-white/40">, </span>
                <span className="text-orange-300">"Next.js"</span>
                <span className="text-white/40">],</span>
              </p>

              <p className="whitespace-pre pl-4">
                <span className="text-cyan-300">focus</span>
                <span className="text-white/40">:</span>{" "}
                <span className="text-white/40">[</span>
                <span className="text-orange-300">"Full-Stack Dev"</span><span className="text-white/40">, </span>
                <span className="text-orange-300">"AI/ML"</span><span className="text-white/40">, </span>
                <span className="text-orange-300">"Computer Vision"</span>
                <span className="text-white/40">],</span>
              </p>

              <p className="whitespace-pre pl-4">
                <span className="text-cyan-300">projectsShipped</span>
                <span className="text-white/40">:</span>{" "}
                <span className="text-emerald-300">{projects.length}</span>
                <span className="text-white/40">,</span>
              </p>

              <p className="whitespace-pre pl-4">
                <span className="text-cyan-300">traits</span>
                <span className="text-white/40">:</span>{" "}
                <span className="text-white/40">[</span>
                <span className="text-orange-300">"Fast Learner"</span><span className="text-white/40">, </span>
                <span className="text-orange-300">"Problem Solver"</span><span className="text-white/40">, </span>
                <span className="text-orange-300">"Team Player"</span>
                <span className="text-white/40">]</span>
              </p>

              <p className="whitespace-pre">
                <span className="text-white/40">{"};"}</span>
              </p>

              <p className="whitespace-pre text-white/30 italic mt-3">
                // thrives in collaborative environments, always shipping.
                <span className="inline-block w-2 h-4 ml-1 bg-white/50 align-middle not-italic animate-pulse" />
              </p>
            </div>
          </div>
        </motion.div>
    </section>
  )
}

export default About
