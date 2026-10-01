"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

interface HappyStudentsCardProps {
  className?: string;
  bgColor?: string;
  textColor?: string;
  starColor?: string;
  borderColor?: string;
}

export default function HappyStudentsCard({ 
  className = "", 
  bgColor = "bg-white",
  textColor = "text-gray-900",
  starColor = "text-brand-accent",
  borderColor = "border-white"
}: HappyStudentsCardProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const display = useTransform(rounded, (latest) => {
    if (latest === 0) return "0";
    if (latest < 1000) return latest.toString();
    const k = Math.floor(latest / 100) / 10;
    if (k % 1 === 0) return `${k}K+`;
    return `${k}K+`;
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 2000, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count]);

  return (
    <div className={`p-3 rounded-[12px] lg:rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] w-[180px] sm:w-[240px] lg:w-[280px] z-50 transform hover:scale-105 transition-transform ${bgColor} ${className}`}>
      <p className={`text-[13px] lg:text-[16px] font-semibold ${textColor}`}>Happy Students</p>
      <p className="text-[10px] lg:text-[12px] text-gray-500 flex items-center gap-1 mt-0.5 lg:mt-0">
        4.5 (240) <span className={`${starColor} text-[12px] lg:text-[16px] -mt-0.5`}>★</span>
      </p>
      <div className="flex items-center mt-2 lg:mt-3">
        <div className="flex -space-x-2 lg:-space-x-3">
          <div className={`w-6 h-6 lg:w-9 lg:h-9 rounded-full border-[2px] lg:border-[3px] ${borderColor} bg-gray-200 overflow-hidden`}>
            <Image width={100} height={100} alt="person" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover"/>
          </div>
          <div className={`w-6 h-6 lg:w-9 lg:h-9 rounded-full border-[2px] lg:border-[3px] ${borderColor} bg-gray-300 overflow-hidden`}>
            <Image width={100} height={100} alt="person" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover"/>
          </div>
          <div className={`w-6 h-6 lg:w-9 lg:h-9 rounded-full border-[2px] lg:border-[3px] ${borderColor} bg-gray-400 overflow-hidden`}>
            <Image width={100} height={100} alt="person" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover"/>
          </div>
          <div className={`w-6 h-6 lg:w-9 lg:h-9 rounded-full border-[2px] lg:border-[3px] ${borderColor} bg-gray-500 overflow-hidden`}>
            <Image width={100} height={100} alt="person" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover"/>
          </div>
        </div>
        <motion.span 
          ref={ref}
          className={`z-10 -ml-2 lg:-ml-3 flex w-6 h-6 lg:w-9 lg:h-9 items-center justify-center rounded-full border-[2px] lg:border-[3px] ${borderColor} bg-brand-accent text-[7.5px] lg:text-[10px] font-bold text-gray-900 tracking-tighter`}
        >
          {display}
        </motion.span>
      </div>
    </div>
  );
}
