import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingAnimation = () => {
  const phrases = ["Vasu", "Love of my life", "My hubby"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (currentText.length < phrases[currentPhraseIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(phrases[currentPhraseIndex].slice(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isTyping, phrases]);

  return (
    <span className="font-dancing">
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-love-red"
      >
        |
      </motion.span>
    </span>
  );
};

export default TypingAnimation;
