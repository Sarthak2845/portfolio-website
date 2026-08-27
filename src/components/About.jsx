import { motion } from "motion/react"
import projects from "../data/projects.js"

const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-10 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-purple-400 text-sm sm:text-base tracking-widest mb-3">// about.js</p>
          <h1 className="relative text-white/90 text-4xl sm:text-5xl lg:text-7xl font-medium transition-all duration-300 hover:text-white
                                         after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0
                                         after:bg-gradient-to-r after:from-purple-800 after:to-pink-500
                                         after:transition-all after:duration-300 hover:after:w-full">
            About Me
          </h1>
        </motion.div>

        <motion.div
          className="w-full max-w-4xl animated-border rounded-2xl border border-white/10 bg-[#080a10]/70 backdrop-blur-lg p-6 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
        <p className="font-mono text-xs sm:text-sm text-white/30 mb-4">/** bio.md */</p>
<p className="text-white/80 leading-relaxed text-xl sm:text-2xl lg:text-3xl">
  I'm a curious{" "}
  <span className="relative inline-block text-blue-500 font-semibold transition-all duration-300 hover:text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
    after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400
    after:transition-all after:duration-300 hover:after:w-full
    hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
    Software Engineering
  </span>{" "}
  student with a robust foundation in{" "}
  <span className="relative inline-block text-orange-500 font-semibold transition-all duration-300 hover:text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
    after:bg-gradient-to-r after:from-orange-400 after:to-yellow-500
    after:transition-all after:duration-300 hover:after:w-full
    hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]">
    C++
  </span>
  {", "}
  <span className="relative inline-block text-yellow-400 font-semibold transition-all duration-300 hover:text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
    after:bg-gradient-to-r after:from-yellow-400 after:to-green-400
    after:transition-all after:duration-300 hover:after:w-full
    hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
    Python
  </span>
  {", "}
  <span className="relative inline-block text-yellow-300 font-semibold transition-all duration-300 hover:text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
    after:bg-gradient-to-r after:from-yellow-300 after:to-orange-400
    after:transition-all after:duration-300 hover:after:w-full
    hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.4)]">
    JavaScript
  </span>
  {", "}
  <span className="relative inline-block text-blue-400 font-semibold transition-all duration-300 hover:text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
    after:bg-gradient-to-r after:from-blue-400 after:to-indigo-500
    after:transition-all after:duration-300 hover:after:w-full
    hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.4)]">
    TypeScript
  </span>
  {", "}
  <span className="relative inline-block text-green-500 font-semibold transition-all duration-300 hover:text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
    after:bg-gradient-to-r after:from-green-400 after:to-emerald-500
    after:transition-all after:duration-300 hover:after:w-full
    hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">
    Node.js
  </span>
  {", "}
  <span className="relative inline-block text-cyan-400 font-semibold transition-all duration-300 hover:text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
    after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500
    after:transition-all after:duration-300 hover:after:w-full
    hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
    React
  </span>{" "}
  and{" "}
  <span className="relative inline-block text-gray-300 font-semibold transition-all duration-300 hover:text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
    after:bg-gradient-to-r after:from-gray-400 after:to-white
    after:transition-all after:duration-300 hover:after:w-full
    hover:drop-shadow-[0_0_8px_rgba(156,163,175,0.4)]">
    Next.js
  </span>
  .{" "}
  I am strongly inclined towards building intelligent systems with a focus on{" "}
  <span className="relative inline-block text-pink-400 font-semibold transition-all duration-300 hover:text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
    after:bg-gradient-to-r after:from-pink-500 after:to-rose-400
    after:transition-all after:duration-300 hover:after:w-full
    hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
    full-stack development
  </span>
  {", "}
  <span className="relative inline-block text-purple-400 font-semibold transition-all duration-300 hover:text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
    after:bg-gradient-to-r after:from-purple-500 after:to-pink-500
    after:transition-all after:duration-300 hover:after:w-full
    hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
    artificial intelligence
  </span>
  {", "}
  <span className="relative inline-block text-red-400 font-semibold transition-all duration-300 hover:text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
    after:bg-gradient-to-r after:from-red-500 after:to-orange-500
    after:transition-all after:duration-300 hover:after:w-full
    hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]">
    machine learning
  </span>
  , and{" "}
  <span className="relative inline-block text-indigo-400 font-semibold transition-all duration-300 hover:text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
    after:bg-gradient-to-r after:from-indigo-400 after:to-purple-500
    after:transition-all after:duration-300 hover:after:w-full
    hover:drop-shadow-[0_0_8px_rgba(129,140,248,0.4)]">
    computer vision
  </span>
  . I have a fast learning curve, logical thinking, and the ability to break down complex problems into effective, real-world solutions. I thrive in collaborative environments and constantly seek opportunities to innovate, improve, and push the boundaries of technology.
</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { label: "currently", value: "Automation Intern" },
            { label: "shipping", value: `${projects.length}+ Projects` },
            { label: "studying", value: "B.E. Computer Engg." },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-center hover:border-cyan-400/40 transition-all duration-300"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-cyan-400/80">// {stat.label}</p>
              <p className="text-white/90 font-semibold mt-1 text-sm sm:text-base">{stat.value}</p>
            </div>
          ))}
        </motion.div>
    </section>
  )
}

export default About
