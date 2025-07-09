import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FloatingElements from "@/components/floating-elements";
import HeroSection from "@/components/hero-section";
import TimelineSection from "@/components/timeline-section";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrolled = window.pageYOffset;
      setShowHeader(scrolled > heroHeight * 0.6);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-love-bg overflow-x-hidden">
      <title>Happy Birthday My Love</title>
      <meta name="description" content="A romantic birthday website celebrating love and special moments together" />
      
      <FloatingElements />
      
      {/* Fixed Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: showHeader ? 0 : -100, 
          opacity: showHeader ? 1 : 0 
        }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bg-love-bg/95 backdrop-blur-sm shadow-lg z-50 border-b-2 border-love-light"
      >
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-love-red text-center font-dancing">
            Happy Birthday Vasu! 🎉❤️
          </h1>
        </div>
      </motion.header>

      <HeroSection />
      <TimelineSection />
      
      {/* Final Message Section */}
      <section className="py-16 bg-gradient-to-t from-love-bg to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-love-red mb-8 font-dancing"
            >
              Happy Birthday, My Everything! 🎉
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-700 leading-relaxed mb-8"
            >
              On this special day, I want you to know how incredibly grateful I am to have you in my life. 
              You bring so much joy, love, and meaning to every single day. May this new year of your life 
              be filled with endless happiness, beautiful moments, and all the love your heart can hold.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl text-love-red font-dancing font-bold"
            >
              With all my love, always and forever ❤️(keep waiting for some special messages from me during the day)
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
