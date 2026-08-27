import { motion } from "motion/react"
import experienceData from "../data/experience.js"

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="relative text-white/90 text-4xl sm:text-5xl lg:text-7xl font-medium transition-all duration-300 hover:text-white
                                 after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0
                                 after:bg-gradient-to-r after:from-purple-800 after:to-pink-500
                                 after:transition-all after:duration-300 hover:after:w-full">
          Experience
        </h1>
      </motion.div>

      <div className="w-full max-w-3xl space-y-8">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="animated-border rounded-2xl overflow-hidden border border-white/10 bg-[#080a10]/80 backdrop-blur-lg shadow-2xl">
              {/* Terminal top bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs sm:text-sm text-white/40 font-mono truncate">
                  ~/career/{exp.company.toLowerCase().replace(/\s+/g, "-")}.sh
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 sm:p-8 font-mono">
                <p className="text-xs sm:text-sm">
                  <span className="text-purple-400">sarthak@dev</span>
                  <span className="text-white/40">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white/40">$ </span>
                  <span className="text-green-400">whoami --current-role</span>
                  <span className="inline-block w-2 h-4 ml-1 bg-white/70 align-middle animate-pulse" />
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl sm:text-3xl font-bold font-['Orbitron'] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {exp.role}
                  </h2>
                  {exp.current && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      Currently Working
                    </span>
                  )}
                </div>

                <p className="text-lg sm:text-xl text-white/80 mt-2">
                  <span className="text-white/30">@</span>{exp.company}
                </p>
                <p className="text-xs sm:text-sm text-white/40 mt-1">{exp.duration}</p>

                <p className="text-white/70 mt-5 leading-relaxed font-['Sour_Gummy'] text-sm sm:text-base">
                  {exp.description}
                </p>

                {exp.tech?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-md text-xs bg-white/5 border border-white/10 text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
