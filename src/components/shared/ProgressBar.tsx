"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ProgressBarProps = {
  width: string | number;
  duration?: number;
  containerClassName?: string;
  fillClassName?: string;
};

export default function ProgressBar({
  width,
  duration = 2,
  containerClassName = "w-full bg-brand/90 h-1.5 lg:h-2.5 rounded-full overflow-hidden",
  fillClassName = "bg-brand-accent h-full rounded-full",
}: ProgressBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={containerClassName}>
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width } : { width: 0 }}
        transition={{ duration, ease: "easeOut" }}
        className={fillClassName}
      />
    </div>
  );
}
