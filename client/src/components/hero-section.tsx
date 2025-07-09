import { motion } from "framer-motion";
import TypingAnimation from "./typing-animation";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-gradient relative z-10">
      <div className="text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-gradient font-dancing"
          >
            Happy Birthday
          </motion.h1>
          <div className="text-3xl md:text-5xl font-semibold text-love-red mb-4">
            <TypingAnimation />
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 border-2 border-love-red rounded-full flex justify-center"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-love-red rounded-full mt-2"
            />
          </motion.div>
          <p className="text-love-red text-sm mt-2 font-medium">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
