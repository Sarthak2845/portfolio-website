import { motion } from "motion/react"
import SpotlightCard from "./SpotlightCard"
import { FaPaintBrush, FaServer, FaTools } from "react-icons/fa"
import { frontEndSkills, backEndSkills, otherSkills } from "../data/skills"

const Skill = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
            {/* Section Title */}
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
                    Skills
                </h1>
            </motion.div>

            {/* Skill Sections */}
            <div className="flex flex-col md:flex-row flex-wrap items-stretch justify-center gap-6 mt-10 w-full">

                {/* Frontend */}
                <SpotlightCard
                    className="p-6 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] flex flex-col items-center justify-center"
                    spotlightColor="rgba(197, 196, 196, 0.3)"
                >
                    <FaPaintBrush className="inline m-3 text-pink-500" size={60} />
                    <h2 className="text-xl sm:text-2xl font-bold font-['Orbitron'] mb-4 text-center bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                        Frontend
                    </h2>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {frontEndSkills.map((tech, i) => (
                            <div
                                key={i}
                                className="relative group w-16 sm:w-20 h-16 sm:h-20 bg-neutral-900 p-2 rounded-xl flex items-center justify-center"
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    title={tech.name}
                                    className="max-w-full max-h-full object-contain"
                                    style={tech.name === "Bootstrap" ? { filter: "invert(1)" } : {}}
                                />
                                {/* Tooltip */}
                                <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-white text-black text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </SpotlightCard>

                {/* Backend */}
                <SpotlightCard
                    className="p-6 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] flex flex-col items-center justify-center"
                    spotlightColor="rgba(197, 196, 196, 0.3)"
                >
                    <FaServer className="inline m-3 text-blue-500" size={60} />
                    <h2 className="text-xl sm:text-2xl font-bold font-['Orbitron'] mb-4 text-center bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                        Backend
                    </h2>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {backEndSkills.map((tech, i) => (
                            <div
                                key={i}
                                className="relative group w-16 sm:w-20 h-16 sm:h-20 bg-neutral-900 p-2 rounded-xl flex items-center justify-center"
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    title={tech.name}
                                    className="max-w-full max-h-full object-contain"
                                    style={tech.name === "Express.js" || tech.name === "Socket.io" ? { filter: "invert(1)" } : {}}
                                />
                                {/* Tooltip */}
                                <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-white text-black text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </SpotlightCard>

                {/* Other Tools */}
                <SpotlightCard
                    className="p-6 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] flex flex-col items-center justify-center"
                    spotlightColor="rgba(197, 196, 196, 0.3)"
                >
                    <FaTools className="inline m-3 text-green-500" size={60} />
                    <h2 className="text-xl sm:text-2xl font-bold font-['Orbitron'] mb-4 text-center bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                        Tools & Others
                    </h2>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {otherSkills.map((tech, i) => (
                            <div
                                key={i}
                                className="relative group w-16 sm:w-20 h-16 sm:h-20 bg-neutral-900 p-2 rounded-xl flex items-center justify-center"
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    title={tech.name}
                                    className="max-w-full max-h-full object-contain"
                                    style={tech.name === "GitHub" ? { filter: "invert(1)" } : {}}
                                />
                                {/* Tooltip */}
                                <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-white text-black text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </SpotlightCard>
            </div>
        </section>
    )
}

export default Skill
