"use client";

import { motion } from "framer-motion";
import HappyStudentsCard from "../../shared/HappyStudentsCard";
import LearningProgressCard from "../../shared/LearningProgressCard";

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
    transition: { type: "spring" as const, stiffness: 260, damping: 20, delay: delay },
  };



  if (type === "uiux") {
    return (
      <motion.div
        {...animationProps}
        className={`absolute z-30  min-h-[90px] flex flex-col justify-center rounded-xl bg-white px-4 py-4 shadow-xl ${className}`}
      >
        <p className="text-[12px] font-semibold text-black">
          UI/UX Design
        </p>

        <div className="mt-2 flex  gap-1 text-[10px] text-gray-500">
          <span>200 Courses</span>
          <span>1000+ Students</span>
        </div>
      </motion.div>
    );
  }

  if (type === "progress") {
    return (
      <LearningProgressCard
        {...animationProps}
        className={`absolute z-30 w-[150px] ${className}`}
        delay={delay}
      />
    );
  }

  return (
    <motion.div
      {...animationProps}
      className={`absolute z-30 ${className}`}
    >
      <HappyStudentsCard />
    </motion.div>
  );
};

export default FloatingCard;