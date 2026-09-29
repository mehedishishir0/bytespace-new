"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type FloatingCardProps = {
  type: "uiux" | "progress" | "students";
  className?: string;
  delay?: number;
};

const FloatingCard = ({
  type,
  className = "",
  delay = 0,
}: FloatingCardProps) => {
  const animationProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 260, damping: 20, delay: delay },
  };

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (type === "progress") {
      const animation = animate(count, 55, { duration: 2.5, delay: delay + 0.2 });
      return animation.stop;
    }
  }, [type, delay, count]);

  if (type === "uiux") {
    return (
      <motion.div
        {...animationProps}
        className={`absolute z-30 w-[145px] min-h-[90px] flex flex-col justify-center rounded-xl bg-white px-4 py-4 shadow-xl ${className}`}
      >
        <p className="text-[12px] font-semibold text-black">
          UI/UX Design
        </p>

        <div className="mt-2 flex flex-col gap-1 text-[10px] text-gray-500">
          <span>200 Courses</span>
          <span>1000+ Students</span>
        </div>
      </motion.div>
    );
  }

  if (type === "progress") {
    return (
      <motion.div
        {...animationProps}
        className={`absolute z-30 w-[150px] min-h-[100px] flex flex-col justify-center rounded-xl bg-white px-5 py-4 shadow-xl ${className}`}
      >
        <p className="text-[11px] font-medium text-gray-600">
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
            className="h-full rounded-full bg-[#CBFC01]"
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      {...animationProps}
      className={`absolute z-30 w-[150px] min-h-[100px] flex flex-col justify-center rounded-xl bg-white px-4 py-4 shadow-xl ${className}`}
    >
      <p className="text-[11px] font-semibold text-black">
        Happy Students
      </p>
      <p className="text-[10px] text-gray-500 mt-1">
        4.5 (240) <span className="text-[#CBFC01] text-[12px]">★</span>
      </p>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex -space-x-2">
          <div className="h-7 w-7 rounded-full border-2 border-white bg-gray-200" />
          <div className="h-7 w-7 rounded-full border-2 border-white bg-gray-300" />
          <div className="h-7 w-7 rounded-full border-2 border-white bg-gray-400" />
          <div className="h-7 w-7 rounded-full border-2 border-white bg-gray-500" />
        </div>

        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#CBFC01] text-[8px] font-bold text-black">
          2K+
        </span>
      </div>
    </motion.div>
  );
};

export default FloatingCard;