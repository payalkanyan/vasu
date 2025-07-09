import { motion } from "framer-motion";

interface TimelineItemProps {
  id: number;
  title: string;
  content: string;
  emoji: string;
  imageUrl: string;
  imageAlt: string;
  isLeft: boolean;
  index: number;
}

const TimelineItem = ({ title, content, emoji, imageUrl, imageAlt, isLeft, index }: TimelineItemProps) => {
  const gradients = [
    "from-love-light to-love-pink",
    "from-love-pink to-love-red",
    "from-love-light to-love-dark",
    "from-love-red to-love-pink",
    "from-love-pink to-love-light",
    "from-love-dark to-love-pink"
  ];

  const gradientClass = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="timeline-item mb-16 relative"
    >
      {/* Timeline Dot */}
      <div className="timeline-dot hidden md:block absolute left-1/2 top-1/2 w-5 h-5 bg-love-red rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg border-4 border-love-bg"></div>
      
      <div className="md:flex items-center">
        {/* Image */}
        <div className={`md:w-1/2 ${isLeft ? 'md:pr-8' : 'md:pl-8 order-2'}`}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`rounded-full w-64 h-64 mx-auto mb-6 md:mb-0 bg-gradient-to-br ${gradientClass} p-2 shadow-2xl`}
          >
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        </div>
        
        {/* Content */}
        <div className={`md:w-1/2 ${isLeft ? 'md:pl-8' : 'md:pr-8 order-1'}`}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="card-gradient p-6 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-love-red mb-4 font-dancing">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{content}</p>
            <div className="mt-4 text-sm text-love-red font-semibold">{emoji}</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
