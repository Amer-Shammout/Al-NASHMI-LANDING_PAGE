// components/AnimatedSection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  className = "w-full",
  direction = "up",
  duration = 0.6 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
    none: { y: 0 }
  };

  const initial = directions[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ ...initial, opacity: 0 }}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : { ...initial, opacity: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;