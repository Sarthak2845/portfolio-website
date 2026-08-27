import { motion } from "motion/react"
import { MdDateRange } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import educationData from "../data/education.js";

export default function EducationSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 " id="education">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
                <p className="font-mono text-purple-400 text-sm sm:text-base tracking-widest mb-3">// education.log</p>
                <h1 className="relative text-white/90 text-4xl sm:text-5xl lg:text-7xl font-medium transition-all duration-300 hover:text-white
                                         after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0
                                         after:bg-gradient-to-r after:from-purple-800 after:to-pink-500
                                         after:transition-all after:duration-300 hover:after:w-full">
                    Education
                </h1>
        </motion.div>

        <div className="relative w-full max-w-3xl space-y-8">
          {/* Timeline spine */}
          <div className="hidden sm:block absolute left-[38px] top-4 bottom-4 w-px bg-gradient-to-b from-purple-500/50 via-white/10 to-transparent" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div
                className="animated-border relative overflow-hidden rounded-2xl border border-white/10
                          bg-[#080a10]/80 backdrop-blur-lg shadow-lg
                          cursor-pointer hover:border-white/30 transition-all duration-300"
                onClick={() => window.open(edu.website, '_blank')}
              >
                <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${edu.gradient}`} />

                <FaArrowRight className="absolute bottom-6 right-6 text-white/70 opacity-0
                                       group-hover:opacity-100 transition-all duration-300
                                       group-hover:translate-x-1" />

                <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                  <div className="relative flex-shrink-0">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} Logo`}
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28
                               rounded-full object-cover border-2 border-white/20 shadow-lg"
                    />
                    <span className="absolute -bottom-1 -right-1 font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/80 border border-white/20 text-cyan-300">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex-1 text-center sm:text-left">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-0">
    {edu.degree}
  </h2>
  <span className="font-mono px-3 py-1 text-xs sm:text-sm rounded-md border border-white/10 bg-white/5 text-cyan-300 w-fit mx-auto sm:mx-0">
    [{edu.level}]
  </span>
</div>


                    <p className="text-base sm:text-lg text-slate-300 mb-2 leading-relaxed">
                      {edu.institution}
                    </p>

                    <div className="flex items-center justify-center sm:justify-start gap-2">
                        <MdDateRange className="text-slate-400 w-5 h-5" />
                      <p className="text-sm sm:text-base text-slate-400 font-medium font-mono">
                        {edu.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

    </section>
  );
}

