import { FaLinkedin, FaGithubSquare, FaDiscord, FaDownload} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import ProfilePic from "./sub-components/ProfilePic";
import TextType from "./sub-components/Text";
import { motion } from "motion/react"
import Button from "./sub-components/Button";
import pdf from '../assets/SarthakRana.pdf';
const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
        >
            <div className="max-w-7xl mx-auto w-full">
                <motion.div 
                    className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="flex-1 text-center lg:text-left order-2 lg:order-1"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                                     leading-tight font-semibold text-white mb-4">
                            Hi, there! <br />I am
                        </h3>
                        
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                                      leading-tight font-semibold mb-6">
                            <TextType
                                text={["Sarthak Rana", "A Developer", "An Innovator"]}
                                typingSpeed={70}
                                deletingSpeed={40}
                                pauseDuration={1500}
                                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-pink-500 to-red-500"
                            />
                        </div>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl 
                                    bg-clip-text text-transparent bg-gradient-to-r 
                                    from-[#F0F8FF] via-[#B0E0E6] to-[#4682B4] 
                                    max-w-2xl leading-relaxed">
                            Engineering technology with purpose, precision, and creativity.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="flex-shrink-0 order-1 lg:order-2"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <ProfilePic/>
                    </motion.div>
                </motion.div>
<motion.div
  className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-start md:gap-6"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  {/* Icons Row */}
  <div className="flex items-center justify-center gap-4 sm:gap-6">
    <a
      href="https://www.linkedin.com/in/sarthak-rana-897519217/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/70 hover:-translate-y-2 transition-transform duration-300"
    >
      <FaLinkedin size={28} />
    </a>

    <a
      href="https://github.com/Sarthak2845"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/70 hover:-translate-y-2 transition-transform duration-300"
    >
      <FaGithubSquare size={28} />
    </a>

    <a
      href="https://discord.com/users/873087763690442782"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/70 hover:-translate-y-2 transition-transform duration-300"
    >
      <FaDiscord size={28} />
    </a>

    <a
      href="mailto:rsarthak2845@gmail.com"
      className="text-white/70 hover:-translate-y-2 transition-transform duration-300"
    >
      <MdEmail size={28} />
    </a>

    <a
      href="https://x.com/RSarthak2845"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/70 hover:-translate-y-2 transition-transform duration-300"
    >
      <FaSquareXTwitter size={28} />
    </a>
  </div>

  {/* Button below icons */}
  <Button
    text={
      <>
        <FaDownload className="inline-block mr-2" /> Download Resume
      </>
    }
    src={pdf}
  />
</motion.div>


            </div>
        </section>
    );
};

export default Home;
