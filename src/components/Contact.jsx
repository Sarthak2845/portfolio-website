import { motion } from "motion/react"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  const contacts = [
    {
      id: 1,
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Email",
      link: "mailto:rsarthak2845@gmail.com",
      text: "rsarthak2845@gmail.com",
    },
    {
      id: 2,
      icon: <FaLinkedin className="w-8 h-8" />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/sarthak-rana-897519217/",
      text: "sarthak-rana-897519217",
    },
    {
      id: 3,
      icon: <FaGithub className="w-8 h-8" />,
      title: "GitHub",
      link: "https://github.com/Sarthak2845",
      text: "Sarthak2845",
    },
    {
      id: 4,
      icon: <FaSquareXTwitter className="w-8 h-8" />,
      title: "X",
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
        <h1 className="relative text-white/90 text-4xl sm:text-5xl lg:text-7xl font-medium hover:text-white transition-all duration-300 
                       after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 
                       after:bg-gradient-to-r after:from-purple-800 after:to-pink-500 
                       after:transition-all after:duration-300 hover:after:w-full">
          Contact
        </h1>
      </motion.div>


      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
        {contacts.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 group"
          >
            <div className="rounded-3xl bg-black backdrop-blur-xl p-6 flex flex-col items-center 
                            justify-center text-center shadow-lg">
              <div className="text-white/80 mb-3 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.text}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
