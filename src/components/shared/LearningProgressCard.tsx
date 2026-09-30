"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, HTMLMotionProps } from "framer-motion";

interface LearningProgressCardProps extends HTMLMotionProps<"div"> {
  className?: string;
  delay?: number;
}

export default function LearningProgressCard({ className = "", delay = 0, ...props }: LearningProgressCardProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 55, { duration: 2.5, delay: delay + 0.2 });
    return animation.stop;
  }, [delay, count]);

  return (
    <motion.div
      {...props}
      className={`min-h-[100px] flex flex-col justify-center rounded-xl bg-white px-5 py-4 shadow-xl ${className}`}
    >
      <p className="text-[11px] font-medium text-gray-600 mb-0 leading-none">
        Learning Progress
      </p>

      <div className="mt-2">
        <span className="text-3xl font-bold text-black flex leading-none">
          <motion.span>{rounded}</motion.span>%
        </span>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "55%" }}
          transition={{ duration: 2.5, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-brand-accent"
        />
      </div>
    </motion.div>
  );
}
