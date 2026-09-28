import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9998] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #8c5e39 0%, #e6b17e 50%, #f5deca 100%)",
        boxShadow: "0 0 8px rgba(230,177,126,0.6)",
      }}
    />
  );
};
