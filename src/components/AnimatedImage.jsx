import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// مكون مخصص للصورة المتحركة
const AnimatedImage = ({
  src,
  alt,
  className = "",
  direction = "left",
  delay = 0,
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsInView(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  const directions = {
    left: { x: 100, opacity: 0 },
    right: { x: -100, opacity: 0 },
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    none: { opacity: 0 },
  };

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      initial={directions[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : directions[direction]}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className} // الآن CSS سيعمل بشكل طبيعي
      loading="lazy"
    />
  );
};
export default AnimatedImage;
