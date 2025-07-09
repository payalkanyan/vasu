import { motion } from "framer-motion";
import TimelineItem from "./timeline-item";
import dayWeMet from "@assets/day_we_met_1752061800128.jpeg";
import firstDate from "@assets/first_date_1752061800128.jpeg";
import loveU from "@assets/love_u_1752061800128.jpeg";
import adventure from "@assets/adv_1752061800127.jpeg";
import dance from "@assets/dance_1752061800128.jpeg";
import cozy from "@assets/cozy_1752061800128.jpeg";
import sweet from "@assets/sweet_1752061800128.jpeg";
import laugh from "@assets/laugh_1752061800127.jpeg";
import hand from "@assets/hand_1752061800127.jpeg";
import forever from "@assets/forever_1752061800127.jpeg";
import birthdaySpecial from "@assets/WhatsApp Image 2025-07-09 at 5.09.17 PM(2)_1752061800128.jpeg";

const TimelineSection = () => {
  const timelineData = [
    {
      id: 1,
      title: "The Day We Met",
      content: "From the moment our eyes met, I knew there was something magical about you. Your smile lit up my world, and I couldn't imagine life without you in it. This is where our beautiful love story began, my darling.",
      emoji: "💕 Forever in my heart",
      imageUrl: dayWeMet,
      imageAlt: "The day we met",
      isLeft: true
    },
    {
      id: 2,
      title: "First Date Magic",
      content: "I was so nervous, but you made me feel so comfortable. We talked for hours, laughed until our stomachs hurt, and I knew I was falling for you. That night, I went home with butterflies and dreams of forever.",
      emoji: "🌟 Butterflies forever",
      imageUrl: firstDate,
      imageAlt: "Our first date",
      isLeft: false
    },
    {
      id: 3,
      title: "Our First 'I Love You'",
      content: "Under the starlit sky, you whispered those three magical words that changed everything. My heart skipped a beat, and I knew that this was real, this was forever. I love you more than words can express, my sweet angel.",
      emoji: "💖 Love you to the moon",
      imageUrl: loveU,
      imageAlt: "First I love you",
      isLeft: true
    },
    {
      id: 4,
      title: "Adventure Together",
      content: "Every adventure with you is a treasure. From spontaneous road trips to quiet moments at home, you make every day an adventure. Thank you for being my perfect travel companion through life's beautiful journey.",
      emoji: "🗺️ Adventures await",
      imageUrl: adventure,
      imageAlt: "Our adventures",
      isLeft: false
    },
    {
      id: 5,
      title: "Dancing in Love",
      content: "Dancing with you feels like floating on clouds. In your arms, I've found my safe haven, my home, my everything. Every dance is a celebration of our love, and I want to keep dancing with you forever.",
      emoji: "💃 Dance through life",
      imageUrl: dance,
      imageAlt: "Dancing together",
      isLeft: true
    },
    {
      id: 6,
      title: "Cozy Moments",
      content: "The quiet moments we share are just as precious as the grand adventures. Cuddling on the couch, watching movies, or just talking about everything and nothing - these simple moments with you are my favorite kind of magic.",
      emoji: "🏡 Home is with you",
      imageUrl: cozy,
      imageAlt: "Cozy moments",
      isLeft: false
    },
    {
      id: 7,
      title: "Sweet Kisses",
      content: "Every kiss from you is like a promise of forever. Your lips against mine remind me that I'm exactly where I belong. Thank you for making every kiss feel like the first one, full of love and excitement.",
      emoji: "💋 Kiss me forever",
      imageUrl: sweet,
      imageAlt: "Sweet moments",
      isLeft: true
    },
    {
      id: 8,
      title: "Laughter & Joy",
      content: "Your laughter is my favorite sound in the world. You have this incredible ability to make me smile even on my worst days. Thank you for filling my life with so much joy, laughter, and happiness, my sunshine.",
      emoji: "😂 Laughter is love",
      imageUrl: laugh,
      imageAlt: "Laughter and joy",
      isLeft: false
    },
    {
      id: 9,
      title: "Hand in Hand",
      content: "Walking through life with you, hand in hand, is the greatest blessing. No matter where our path leads, I know we'll face it together. Your hand in mine makes me feel like I can conquer the world.",
      emoji: "🤝 Together always",
      imageUrl: hand,
      imageAlt: "Hand in hand",
      isLeft: true
    },
    {
      id: 10,
      title: "Forever & Always",
      content: "Today we celebrate another year of your beautiful existence, but more importantly, we celebrate the love we share. You are my yesterday, my today, and my tomorrow. Happy Birthday, my love. Here's to many more years of love, laughter, and happiness together.",
      emoji: "♾️ Forever yours",
      imageUrl: forever,
      imageAlt: "Forever and always",
      isLeft: false
    },
    {
      id: 11,
      title: "Special Birthday Memory",
      content: "This special moment captured perfectly shows how much joy you bring into my life. Every birthday with you is a celebration of not just another year, but another year of our beautiful love story together.",
      emoji: "🎂 Birthday love",
      imageUrl: birthdaySpecial,
      imageAlt: "Special birthday moment",
      isLeft: true
    }
  ];

  return (
    <section className="py-16 pt-24 bg-gradient-to-b from-love-bg to-white relative">
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
