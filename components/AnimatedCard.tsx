"use client";

import { motion } from "framer-motion";

export default function AnimatedCard({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02
      }}
      transition={{
        duration: 0.2
      }}
    >
      {children}
    </motion.div>
  );
}