import { motion } from "motion/react"
import { useState } from "react"
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ]

    return (
        <motion.nav 
            className="fixed top-0 w-full left-0 z-50 bg-black/20 backdrop-blur-lg border-b"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="mx-auto flex items-center justify-between px-6 py-4 max-w-7xl">
                {/* Logo */}
                <motion.div
                    className="text-3xl bg-gradient-to-r from-purple-800 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {"<Sarthak/>"}
                </motion.div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <motion.li 
                            key={item.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <a 
                                href={item.href} 
                                className="relative text-white/90 text-lg font-medium transition-all duration-300 hover:text-white
                                         after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 
                                         after:bg-gradient-to-r after:from-purple-800 after:to-pink-500 
                                         after:transition-all after:duration-300 hover:after:w-full
                                         hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
                            >
                                {item.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>
                <motion.button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    <TiThMenu className="text-3xl text-white/90 hover:text-white" />
                </motion.button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden bg-black/30 backdrop-blur-lg border-t border-white/10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="px-6 py-4 space-y-4">
                        {navItems.map((item, index) => (
                            <motion.li 
                                key={item.name}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <a 
                                    href={item.href}
                                    className="block text-white/90 text-lg font-medium py-2 transition-all duration-300 hover:text-white hover:pl-2
                                             hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    )
}

export default Navbar
