import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingAnimation = () => {
  const phrases = ["Vasu", "Love of my life", "My hubby"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping && !isDeleting) {
      if (currentText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 75);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isTyping, isDeleting, phrases]);

  return (
    <div className="min-h-[80px] flex items-center justify-center">
      <span className="font-dancing text-love-red">
        {currentText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      </span>
    </div>
  );
};

export default TypingAnimation;
