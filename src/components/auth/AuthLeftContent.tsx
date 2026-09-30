'use client';

import Image from "next/image";
import { Share2 } from "lucide-react";
import { motion } from "framer-motion";
import HappyStudentsCard from "../shared/HappyStudentsCard";
import { courses } from "@/data/mockData";

interface AuthLeftContentProps {
  type: "sign-in" | "sign-up";
}

export default function AuthLeftContent({ type }: AuthLeftContentProps) {
  const isSignUp = type === "sign-up";

  return (
    <div className="flex flex-col justify-center px-6 lg:px-12 text-white z-10 w-full">

      {/* Heading & Subtitle */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md mb-8"
      >
        <h1 className="text-4xl font-bold font-poppins tracking-tight mb-4">
          {isSignUp ? "Sign up and come in" : "Sign in with ease"}
        </h1>
        <p className="text-blue-200/80 text-sm leading-relaxed">
          {isSignUp 
            ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
            : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
        </p>
      </motion.div>

      {/* Floating Preview Cards / Graphic Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative w-full max-w-lg mt-8 h-[550px]"
      >
        {/* Decorative Shapes */}
        <div className="absolute top-10 left-0 w-36 h-36 z-30 hidden lg:block">
          <Image src="/images/auth/top-green-ring.png" alt="Ring" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain drop-shadow-xl" />
        </div>  
        <div className="absolute -bottom-5 left-8 w-40 h-40 z-40 hidden lg:block">
          <Image src="/images/auth/bottom-triangle.png" alt="Triangle" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain drop-shadow-xl" />
        </div>
        <div className="absolute bottom-24 right-10 w-32 h-32 z-50 hidden lg:block">
          <Image src="/images/auth/left-squiggle.png" alt="Squiggle" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain drop-shadow-xl" />
        </div>

        {/* Background Card (Build Digital Asset) */}
        <div className="absolute top-32 left-1/2 -translate-x-[55%] sm:left-0 sm:-translate-x-0 w-[280px] sm:w-[320px] bg-white rounded-2xl border border-gray-200 p-4 shadow-xl text-slate-900 z-10 -rotate-1 hover:rotate-0 transition-transform">
          <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
            <Image
              src={courses[1].image}
              alt={courses[1].title}
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-start">
              <span className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-gray-800 font-bold shadow-sm">{courses[1].lessons}</span>
            </div>
          </div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-bold text-gray-900 text-base line-clamp-1">{courses[1].title}</h3>
            <span className="text-xs font-semibold text-gray-800 flex items-center gap-0.5 whitespace-nowrap">
              {courses[1].rating} <span className="text-yellow-400">★</span>
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            by <span className="text-brand font-medium">{courses[1].creator}</span>
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 mb-4">
            <span className="bg-gray-100 text-gray-700 text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
              <Share2 className="w-3 h-3" /> {courses[1].level}
            </span>
            <div className="flex items-center">
              <div className="flex -space-x-2 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" width={24} height={24} className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" />
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" width={24} height={24} className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" />
                <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="User" width={24} height={24} className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" />
              </div>
              <span className="ml-2 text-[10px] font-bold bg-black text-white px-1.5 py-0.5 rounded-full">
                26+
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-brand font-extrabold text-lg">{courses[1].price.split('/')[0]}</span>
            <span className="text-gray-400 text-xs ml-0.5">/{courses[1].price.split('/')[1]}</span>
          </div>
        </div>

        {/* Foreground Card (the Power of Big Data) */}
        <div className="absolute top-8 left-1/2 -translate-x-[45%] sm:left-24 sm:-translate-x-0 w-[280px] sm:w-[320px] bg-white rounded-2xl border border-gray-200 p-4 shadow-2xl text-slate-900 z-20 hover:-translate-y-1 transition-transform">
          <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
            <Image
              src={courses[2].image}
              alt={courses[2].title}
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1">
              <span className="bg-white/80 backdrop-blur-md px-2 py-1.5 rounded-full text-[9px] text-gray-800 font-bold shadow-sm whitespace-nowrap">{courses[2].lessons}</span>
              <span className="bg-white/80 backdrop-blur-md px-2 py-1.5 rounded-full text-[9px] text-gray-800 font-bold shadow-sm whitespace-nowrap">{courses[2].duration}</span>
              <span className="bg-white/80 backdrop-blur-md px-2 py-1.5 rounded-full text-[9px] text-gray-800 font-bold shadow-sm whitespace-nowrap">{courses[2].comments}</span>
            </div>
          </div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-bold text-gray-900 text-base line-clamp-1">{courses[2].title}</h3>
            <span className="text-xs font-semibold text-gray-800 flex items-center gap-0.5 whitespace-nowrap">
              {courses[2].rating} <span className="text-brand-accent">★</span>
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            by <span className="text-brand font-medium">{courses[2].creator}</span>
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 mb-4">
            <span className="bg-gray-100 text-gray-700 text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
              <Share2 className="w-3 h-3" /> {courses[2].level}
            </span>
            <div className="flex items-center">
              <div className="flex -space-x-2 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" width={24} height={24} className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" />
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" width={24} height={24} className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" />
                <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="User" width={24} height={24} className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" />
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" width={24} height={24} className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" />
              </div>
              <span className="ml-2 text-[10px] font-bold bg-black text-white px-1.5 py-0.5 rounded-full">
                26+
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-brand font-extrabold text-lg">{courses[2].price.split('/')[0]}</span>
            <span className="text-gray-400 text-xs ml-0.5">/{courses[2].price.split('/')[1]}</span>
          </div>
        </div>

        {/* Small Bottom Tag / Floating Card (Happy Students) */}
        <HappyStudentsCard
          className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-12 sm:translate-x-0 min-w-[210px]"
          bgColor="bg-brand-accent"
          starColor="text-brand"
          borderColor="border-brand-accent"
        />
      </motion.div>
    </div>
  );
}