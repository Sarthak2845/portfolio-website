import { motion } from "motion/react";

export default function ProfilePic() {
  return (
    <motion.img
      src="/src/assets/Sarthak.svg"
      alt="Sarthak"
      className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[350px] xl:h-[350px]
                 rounded-full object-cover
                 shadow-[0_20px_50px_-10px_rgba(7,247,163,0.5)]
                 transition-shadow duration-300"
      initial={{ scale: 0.8, y: 30, opacity: 0 }}
      animate={{ 
        scale: 1, 
        y: [0, -12, 0], // floating animation
        opacity: 1 
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      whileHover={{
        scale: 1.05,
        rotate: 2,
        boxShadow: "0px 25px 70px -10px rgba(7,247,163,0.7), 0px 30px 90px -15px rgba(0,255,200,0.5)",
        transition: { duration: 0.4 }
      }}
      whileTap={{ scale: 0.97 }}
    />
  );
}

