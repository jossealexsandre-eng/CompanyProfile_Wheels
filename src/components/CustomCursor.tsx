import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export const CustomCursor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 500, damping: 38 });
  const y = useSpring(rawY, { stiffness: 500, damping: 38 });
  const dotX = useSpring(rawX, { stiffness: 800, damping: 45 });
  const dotY = useSpring(rawY, { stiffness: 800, damping: 45 });

  useEffect(() => {
    const isMobile = () =>
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || window.matchMedia("(pointer:coarse)").matches);

    if (isMobile()) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);
    const onEnterInteractive = () => setIsHover(true);
    const onLeaveInteractive = () => setIsHover(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const attachHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [role=button], input, textarea, select, label, .clickable"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
      return () => {
        interactives.forEach((el) => {
          el.removeEventListener("mouseenter", onEnterInteractive);
          el.removeEventListener("mouseleave", onLeaveInteractive);
        });
      };
    };

    const detach = attachHoverListeners();
    const interval = setInterval(attachHoverListeners, 2500);

    return () => {
      clearInterval(interval);
      detach();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [rawX, rawY, visible]);

  if (typeof window !== "undefined" && (window.innerWidth < 768 || window.matchMedia("(pointer:coarse)").matches)) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference hidden md:block"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: isHover ? 1.7 : clicked ? 0.75 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className={"rounded-full border transition-all duration-200 " + (isHover ? "w-10 h-10 border-[#e6b17e] border-2 bg-[#e6b17e]/10" : "w-8 h-8 border border-[#e6b17e]/70")}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: clicked ? 2 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#e6b17e] shadow-[0_0_8px_#e6b17e]" />
      </motion.div>
    </>
  );
};
