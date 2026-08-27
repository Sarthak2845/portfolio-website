import React from 'react'
import { motion } from "motion/react"
import projects from '../data/projects.js'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import atlasifyImg from '../images/atlasify.png'
import atmosMonitorImg from '../images/atmos-monitor.png'
import mindMetricsImg from '../images/mind-metrics.png'
import stargazexImg from '../images/stargazex.png'
import bloombuddyImg from '../images/bloombuddy.png'

const getProjectImage = (title) => {
    if (title.includes('Atlasify')) return atlasifyImg
    if (title.includes('Atmos Monitor')) return atmosMonitorImg
    if (title.includes('Mind Metrics')) return mindMetricsImg
    if (title.includes('StargazeX')) return stargazexImg
    if (title.includes('BloomBuddy')) return bloombuddyImg
    return null
}

const slugify = (title) =>
    title.split(/[–-]/)[0].trim().toLowerCase().replace(/\s+/g, "-")

const Projects = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20" id="projects">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="font-mono text-purple-400 text-sm sm:text-base tracking-widest mb-3">// featured_projects</p>
                    <h1 className="relative text-white/90 text-4xl sm:text-5xl lg:text-7xl font-medium transition-all duration-300 hover:text-white
          after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0
          after:bg-gradient-to-r after:from-purple-800 after:to-pink-500
          after:transition-all after:duration-300 hover:after:w-full">
                        Projects
                    </h1>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="animated-border bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">

                                {/* Terminal-style file header */}
                                <div className="flex items-center gap-2 px-4 py-2.5 bg-black/40 border-b border-white/10">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                    <span className="ml-2 text-[11px] font-mono text-white/40 truncate flex-1">
                                        {slugify(project.title)}.jsx
                                    </span>
                                    {project.liveLink && (
                                        <span className="flex items-center gap-1.5 text-[10px] font-mono text-green-400 shrink-0">
                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                                            </span>
                                            LIVE
                                        </span>
                                    )}
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                <div className="relative mb-6">
                                    <img
                                        src={getProjectImage(project.title)}
                                        alt={project.title}
                                        className="w-full h-48 object-cover rounded-2xl border border-white/10"
                                    />
                                    <span className="absolute top-2 left-2 font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/80 border border-white/20 text-cyan-300">
                                        0{index + 1}
                                    </span>
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                                        {project.title}
                                    </h2>

                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.skills.map((skill, idx) => (
                                            <div key={idx} className="flex items-center gap-1 bg-white/10 border border-white/20 px-2 py-1 rounded-md text-xs font-mono text-cyan-300">
                                                <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                                                <span>{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 mt-6">
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/10 border border-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                                            >
                                                <FaExternalLinkAlt size={18} />
                                            </a>
                                        )}
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/10 border border-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                                            >
                                                <FaGithub size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

        </section>
    )
}

export default Projects
