"use client";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100% )",
    transition: { duration: 1.5, ease: "easeInOut" },
  },
  enter: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Fully visible
    transition: { duration: 1.5, ease: "easeInOut" },
  },
  exit: {
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="relative overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
