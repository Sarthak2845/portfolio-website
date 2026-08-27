import { motion } from "motion/react"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  const contacts = [
    {
      id: 1,
      icon: <FaEnvelope className="w-5 h-5" />,
      command: "open --email",
      link: "mailto:rsarthak2845@gmail.com",
      text: "rsarthak2845@gmail.com",
    },
    {
      id: 2,
      icon: <FaLinkedin className="w-5 h-5" />,
      command: "open --linkedin",
      link: "https://www.linkedin.com/in/sarthak-rana-897519217/",
      text: "sarthak-rana-897519217",
    },
    {
      id: 3,
      icon: <FaGithub className="w-5 h-5" />,
      command: "open --github",
      link: "https://github.com/Sarthak2845",
      text: "Sarthak2845",
    },
    {
      id: 4,
      icon: <FaSquareXTwitter className="w-5 h-5" />,
      command: "open --x",
      link: "https://x.com/RSarthak2845",
      text: "RSarthak2845",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
      id="contact"
    >
      {/* Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-purple-400 text-sm sm:text-base tracking-widest mb-3">// let's connect</p>
        <h1 className="relative text-white/90 text-4xl sm:text-5xl lg:text-7xl font-medium hover:text-white transition-all duration-300
                       after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0
                       after:bg-gradient-to-r after:from-purple-800 after:to-pink-500
                       after:transition-all after:duration-300 hover:after:w-full">
          Contact
        </h1>
      </motion.div>

      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="animated-border rounded-2xl overflow-hidden border border-white/10 bg-[#080a10]/80 backdrop-blur-lg shadow-2xl">
          {/* Terminal top bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs sm:text-sm text-white/40 font-mono">~/contact.sh</span>
          </div>

          {/* Command list */}
          <div className="p-6 sm:p-8 font-mono divide-y divide-white/5">
            {contacts.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 py-4 first:pt-0 last:pb-0 hover:pl-2 transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-sm sm:text-base">
                  <span className="text-purple-400">$</span>
                  <span className="text-green-400">{item.command}</span>
                  <span className="text-white/50 group-hover:text-cyan-300 transition-colors duration-300">
                    {item.icon}
                  </span>
                </div>
                <span className="text-white/40 group-hover:text-white text-xs sm:text-sm pl-6 sm:pl-0 transition-colors duration-300">
                  {item.text}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
