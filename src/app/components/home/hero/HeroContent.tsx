"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroContent = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="  mx-auto flex w-full flex-col items-center px-4 text-center"
    >
      {/* Heading */}
      <motion.h1
        className=" text-[30px]  font-poppins leading-[1.1] tracking-[-1.5px] text-white sm:text-[52px] lg:text-[60px]"
      >
        Get Access to Hundreds
        <br />
        Courses Available
      </motion.h1>

      {/* Description */}
      <motion.p
        className="mt-5  text-[13px] leading-6 text-white/90 sm:text-sm"
      >
        Unlock your creativity, gain valuable knowledge, and grow your
        business with our wide range of courses.
      </motion.p>

      {/* Search */}
      <motion.div
        variants={itemVariants}
        className="mt-8 flex w-full max-w-[480px] items-center justify-between rounded-full bg-white p-1.5 shadow-xl sm:max-w-[520px]"
      >
        <div className="flex flex-1 items-center gap-3 px-4">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Course, topic, creator"
            className="w-full bg-transparent text-[13px] text-gray-800 outline-none placeholder:text-gray-400"
          />
        </div>

        <button className="rounded-full bg-[#D6FF00] px-7 py-2.5 text-[13px] font-semibold text-black transition hover:bg-[#c9f000]">
          Search
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;