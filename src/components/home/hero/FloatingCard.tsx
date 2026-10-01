"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import HappyStudentsCard from "../../shared/HappyStudentsCard";
import LearningProgressCard from "../../shared/LearningProgressCard";

type FloatingCardProps = {
  type: "uiux" | "progress" | "students";
  className?: string;
  delay?: number;
};

const Counter = ({ to, duration, suffix = "" }: { to: number; duration: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const display = useTransform(rounded, (latest) => `${latest}${suffix}`);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{display}</motion.span>;
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

        <div className="mt-2 flex gap-2 text-[10px] text-gray-500">
          <Counter to={200} duration={2} suffix=" Courses" />
          <Counter to={1000} duration={2.5} suffix="+ Students" />
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