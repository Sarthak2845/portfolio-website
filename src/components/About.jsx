import { motion } from "motion/react"
const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
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
            About Me
          </h1>
        </motion.div>

<p className="text-white/80 leading-relaxed text-2xl sm:text-3xl lg:text-4xl">
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
    </section>
  )
}

export default About

      // I'm curious Software Engineering student with a robust foundation in C++, Python, JavaScript, TypeScript, NodeJs, React and NextJs.I am Strongly inclined towards building intelligent systems with a focus on full-stack development, artificial intelligence, machine learning, and computer vision.I have a fast learning curve, logical thinking, and the ability to break down complex problems into effective, real-world solutions.I Thrive in collaborative environments and constantly seek opportunities to innovate, improve, and push the boundaries of technology.
