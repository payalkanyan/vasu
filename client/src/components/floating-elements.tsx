import { motion } from "framer-motion";

const FloatingElements = () => {
  const floatingVariants = {
    float: {
      y: [-20, 20, -20],
      rotate: [0, 180, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    floatDelayed: {
      y: [-20, 20, -20],
      rotate: [0, 180, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    },
    floatSlow: {
      y: [-20, 20, -20],
      rotate: [0, 180, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    bounce: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Balloons */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="floating-element top-20 left-10 text-6xl text-love-light"
      >
        🎈
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="floatDelayed"
        className="floating-element top-32 right-16 text-4xl text-love-pink"
      >
        🎈
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="floatSlow"
        className="floating-element top-64 left-1/4 text-5xl text-love-light"
      >
        🎈
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="floating-element top-80 right-1/3 text-3xl text-love-pink"
      >
        🎈
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="floatDelayed"
        className="floating-element top-96 left-3/4 text-4xl text-love-light"
      >
        🎈
      </motion.div>

      {/* Stars */}
      <motion.div
        variants={floatingVariants}
        animate="pulse"
        className="floating-element top-40 left-1/3 text-2xl text-love-red"
      >
        ⭐
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="pulse"
        className="floating-element top-60 right-1/4 text-xl text-love-pink"
      >
        ⭐
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="pulse"
        className="floating-element top-[500px] left-1/2 text-2xl text-love-red"
      >
        ⭐
      </motion.div>

      {/* Hearts */}
      <motion.div
        variants={floatingVariants}
        animate="bounce"
        className="floating-element top-24 right-20 text-3xl text-love-red"
      >
        💖
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="bounce"
        className="floating-element top-[400px] left-16 text-2xl text-love-pink"
      >
        💖
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="bounce"
        className="floating-element top-[600px] right-12 text-3xl text-love-red"
      >
        💖
      </motion.div>

      {/* Birthday Cakes */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="floating-element top-[300px] right-1/3 text-3xl text-love-pink"
      >
        🎂
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="floatSlow"
        className="floating-element top-[520px] left-1/5 text-2xl text-love-light"
      >
        🎂
      </motion.div>
    </div>
  );
};

export default FloatingElements;
