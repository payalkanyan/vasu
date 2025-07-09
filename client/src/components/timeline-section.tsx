import { motion } from "framer-motion";
import TimelineItem from "./timeline-item";

const TimelineSection = () => {
  const timelineData = [
    {
      id: 1,
      title: "The Day We Met",
      content: "From the moment our eyes met, I knew there was something magical about you. Your smile lit up my world, and I couldn't imagine life without you in it. This is where our beautiful love story began, my darling.",
      emoji: "💕 Forever in my heart",
      imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      imageAlt: "Romantic couple moment",
      isLeft: true
    },
    {
      id: 2,
      title: "First Date Magic",
      content: "I was so nervous, but you made me feel so comfortable. We talked for hours, laughed until our stomachs hurt, and I knew I was falling for you. That night, I went home with butterflies and dreams of forever.",
      emoji: "🌟 Butterflies forever",
      imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      imageAlt: "Birthday celebration",
      isLeft: false
    },
    {
      id: 3,
      title: "Our First 'I Love You'",
      content: "Under the starlit sky, you whispered those three magical words that changed everything. My heart skipped a beat, and I knew that this was real, this was forever. I love you more than words can express, my sweet angel.",
      emoji: "💖 Love you to the moon",
      imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      imageAlt: "Romantic dinner",
      isLeft: true
    },
    {
      id: 4,
      title: "Adventure Together",
      content: "Every adventure with you is a treasure. From spontaneous road trips to quiet moments at home, you make every day an adventure. Thank you for being my perfect travel companion through life's beautiful journey.",
      emoji: "🗺️ Adventures await",
      imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      imageAlt: "Couple with sparklers",
      isLeft: false
    },
    {
      id: 5,
      title: "Dancing in Love",
      content: "Dancing with you feels like floating on clouds. In your arms, I've found my safe haven, my home, my everything. Every dance is a celebration of our love, and I want to keep dancing with you forever.",
      emoji: "💃 Dance through life",
      imageUrl: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      imageAlt: "Couple dancing",
      isLeft: true
    },
    {
      id: 6,
      title: "Cozy Moments",
      content: "The quiet moments we share are just as precious as the grand adventures. Cuddling on the couch, watching movies, or just talking about everything and nothing - these simple moments with you are my favorite kind of magic.",
      emoji: "🏡 Home is with you",
      imageUrl: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      imageAlt: "Birthday cake",
      isLeft: false
    },
    {
      id: 7,
      title: "Sweet Kisses",
      content: "Every kiss from you is like a promise of forever. Your lips against mine remind me that I'm exactly where I belong. Thank you for making every kiss feel like the first one, full of love and excitement.",
      emoji: "💋 Kiss me forever",
      imageUrl: "https://images.unsplash.com/photo-1492681290082-e83ce93af3c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      imageAlt: "Couple kissing",
      isLeft: true
    },
    {
      id: 8,
      title: "Laughter & Joy",
      content: "Your laughter is my favorite sound in the world. You have this incredible ability to make me smile even on my worst days. Thank you for filling my life with so much joy, laughter, and happiness, my sunshine.",
      emoji: "😂 Laughter is love",
      imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      imageAlt: "Birthday party",
      isLeft: false
    },
    {
      id: 9,
      title: "Hand in Hand",
      content: "Walking through life with you, hand in hand, is the greatest blessing. No matter where our path leads, I know we'll face it together. Your hand in mine makes me feel like I can conquer the world.",
      emoji: "🤝 Together always",
      imageUrl: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      imageAlt: "Couple walking",
      isLeft: true
    },
    {
      id: 10,
      title: "Forever & Always",
      content: "Today we celebrate another year of your beautiful existence, but more importantly, we celebrate the love we share. You are my yesterday, my today, and my tomorrow. Happy Birthday, my love. Here's to many more years of love, laughter, and happiness together.",
      emoji: "♾️ Forever yours",
      imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      imageAlt: "Couple in sunset",
      isLeft: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-love-bg to-white relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-love-red font-dancing"
        >
          Our Beautiful Journey Together
        </motion.h2>
        
        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line hidden md:block absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 z-0"></div>
          
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.id}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
