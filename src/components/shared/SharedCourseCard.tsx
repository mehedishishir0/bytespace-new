"use client";

import Image from "next/image";
import { Share2 } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { Course } from "@/data/mockData";

interface SharedCourseCardProps {
  layoutId?: string;
  isFloating?: boolean;
  className?: string;
  course?: Course;
}

export default function SharedCourseCard({ layoutId, isFloating, className = "", course }: SharedCourseCardProps) {
  // Use fallback values if course is not provided (for backward compatibility)
  const title = course?.title || "Learn Figma from Basic";
  const image = course?.image || "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80";
  const lessons = course?.lessons || "17 Lessons";
  const duration = course?.duration || "2 hours 16 mins";
  const comments = course?.comments || "59 Comments";
  const rating = course?.rating || 4.5;
  const creator = course?.creator || "purepearl studio";
  const level = course?.level || "Beginner";
  const priceParts = (course?.price || "$25/lifetime").split('/');
  const price = priceParts[0];
  const pricePeriod = priceParts.length > 1 ? `/${priceParts[1]}` : "";
  return (
    <motion.div
      layoutId={layoutId}
      className={`bg-white flex flex-col justify-between overflow-hidden ${
        isFloating 
          ? "rounded-[16px] lg:rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-3 lg:p-4" 
          : "rounded-2xl border border-gray-200 p-4 shadow-sm"
      } ${className}`}
    >
      <div>
        <div className={`relative w-full overflow-hidden mb-3 lg:mb-4 bg-gray-100 ${isFloating ? "h-[150px] sm:h-[200px] lg:h-[160px] rounded-[8px] lg:rounded-[10px]" : "h-48 rounded-xl"}`}>
          <Image
            src={image}
            alt={title}
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className={`absolute left-2 right-2 flex ${isFloating ? "bottom-2 lg:bottom-3 gap-1.5 lg:gap-2" : "bottom-3 left-3 right-3 justify-between"}`}>
            <span className={`bg-white/90 backdrop-blur-md rounded-lg text-gray-800 font-medium ${isFloating ? "text-[9px] lg:text-[11px] px-2 lg:px-3 py-1 lg:py-1.5 rounded-full" : "text-[10px] px-3 py-1.5 text-white"}`}>{lessons}</span>
            <span className={`bg-white/90 backdrop-blur-md rounded-lg text-gray-800 font-medium ${isFloating ? "text-[9px] lg:text-[11px] px-2 lg:px-3 py-1 lg:py-1.5 rounded-full" : "text-[10px] px-3 py-1.5 text-white"}`}>{duration}</span>
            {!isFloating && (
              <span className="backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] text-white font-medium">{comments}</span>
            )}
          </div>
        </div>

        <div className="flex items-start justify-between gap-2 mb-1 px-1">
          <h3 className={`font-bold text-gray-900 leading-tight ${isFloating ? "text-[14px] lg:text-[17px]" : "text-base line-clamp-1"}`}>
            {title}
          </h3>
          {!isFloating && (
            <span className="text-xs font-semibold text-gray-800 flex items-center gap-0.5 whitespace-nowrap">
              {rating} <span className="text-yellow-400">★</span>
            </span>
          )}
        </div>

        <p className={`text-gray-500 px-1 ${isFloating ? "text-[10px] lg:text-[12px] mt-0.5 lg:mt-1" : "text-xs mb-4"}`}>
          by <span className={`${isFloating ? "text-brand font-semibold" : "text-gray-700 font-medium"}`}>{creator}</span>
        </p>
      </div>

      <div>
        <div className={`flex items-center justify-between px-1 ${isFloating ? "mt-3 lg:mt-5 mb-3 lg:mb-5" : "pt-3 border-t border-gray-100 mb-4"}`}>
          <span className={`bg-gray-50 text-gray-700 font-semibold flex items-center ${isFloating ? "text-[10px] lg:text-[12px] px-2 lg:px-3 py-1 lg:py-2 rounded-lg lg:rounded-xl gap-1 lg:gap-1.5" : "text-[11px] px-2.5 py-1 rounded-md gap-1 font-medium bg-gray-100"}`}>
            {!isFloating && <Share2 className="w-3 h-3"/>}
            {isFloating && <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 20V4" /></svg>}
            {level}
          </span>

          {isFloating ? (
            <div className="flex -space-x-1">
              <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-[#FF6B6B]"></div>
              <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-[#4DABF7]"></div>
              <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-[#20C997]"></div>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-[2px] border-white bg-gray-200 overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border-[2px] border-white bg-gray-300 overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Student" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border-[2px] border-white bg-gray-400 overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Student" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border-[2px] border-white bg-gray-500 overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Student" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                </div>
                <span className="z-10 flex w-6 h-6 items-center justify-center rounded-full border-[2px] border-white bg-brand-accent text-[8px] font-bold text-gray-900">
                  26+
                </span>
              </div>
            </div>
          )}
        </div>

        <div className={`flex items-center px-1 ${isFloating ? "text-brand font-bold text-base lg:text-xl" : ""}`}>
          <span className={isFloating ? "" : "text-brand font-bold text-base"}>{price}</span>
          <span className={`text-gray-400 font-medium ml-1 ${isFloating ? "text-[10px] lg:text-xs" : "text-xs"}`}>{pricePeriod}</span>
        </div>
      </div>
    </motion.div>
  );
}
