import React from "react";
import { motion } from "framer-motion";

// Scroll-triggered fade-up wrapper used across sections.
export const Reveal = ({ children, delay = 0, y = 30, className = "", as = "div" }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
};

export const Overline = ({ children, className = "" }) => (
  <span
    className={`inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold ${className}`}
  >
    {children}
  </span>
);
