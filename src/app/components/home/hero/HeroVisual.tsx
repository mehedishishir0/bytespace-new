"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";

const floatAnimation = (delay = 0, yOffset = 15, duration = 3) => ({
  y: [0, -yOffset, 0],
  transition: {
    duration: duration,
    repeat: Infinity,
    ease: "easeInOut",
    delay: delay,
  },
});

const HeroVisual = () => {
  return (
    <div className="relative  mx-auto mt-10 flex-1 w-full">
      <motion.div
        animate={floatAnimation(0, 20, 4)}
        className="hidden lg:block absolute left-[-5%] top-[30%] z-10 w-[140px] md:left-[19%] lg:w-[280px]"
      >
        <Image
          src="/images/hero/green-left-decoration.png"
          alt=""
          width={180}
          height={220}
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        animate={floatAnimation(1, 15, 3.5)}
        className="hidden lg:block absolute left-[10%] top-[0%] z-10 w-[90px] md:left-[15%] lg:w-[160px]"
      >
        <Image
          src="/images/hero/white-squiggle-left.png"
          alt=""
          width={120}
          height={120}
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        animate={floatAnimation(2, 25, 4.5)}
        className="hidden lg:block absolute right-[0%] bottom-[80%] z-10 w-[150px] md:left-[0%] lg:w-[200px]"
      >
        <Image
          src="/images/hero/right-green shape.png"
          alt=""
          width={180}
          height={200}
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 z-0 h-[280px] w-[560px] -translate-x-1/2 rounded-t-full bg-[#CBFC01] md:h-[350px] md:w-[700px] lg:h-[450px] lg:w-[900px]"
      ></motion.div>

      <motion.div
        animate={floatAnimation(1.5, 20, 3)}
        className="hidden lg:block absolute right-[10%] bottom-[80%] z-10 w-[80px] md:right-[0%] lg:w-[150px]"
      >
        <Image
          src="/images/hero/neon-green.png"
          alt=""
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        animate={floatAnimation(0.5, 30, 5)}
        className="hidden lg:block absolute right-[5%] top-[40%] z-[999] w-[100px] md:right-[15%] lg:w-[260px]"
      >
        <Image
          src="/images/hero/white-squiggle-right.png"
          alt=""
          width={420}
          height={220}
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        animate={floatAnimation(2.5, 15, 4)}
        className="hidden lg:block absolute right-[5%] top-[0%] z-[999] w-[100px] md:right-[24%] lg:w-[160px]"
        style={{ zIndex: 999 }}
      >
        <Image
          src="/images/hero/triangle.png"
          alt=""
          width={130}
          height={130}
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        className="absolute bottom-0 left-1/2 z-20 w-[420px] -translate-x-1/2 md:w-[500px] lg:w-[550px]"
      >
        <Image
          src="/images/hero/hero-person.png"
          alt="Student"
          width={600}
          height={650}
          className="w-full h-auto object-cover"
          priority
        />
      </motion.div>

      <FloatingCard
        type="uiux"
        className="hidden md:flex left-[2%] top-[15%] md:left-[10%] lg:left-[36%]"
        delay={0.8}
      />

      <FloatingCard
        type="progress"
        className="hidden md:flex right-[2%] top-[15%] md:right-[10%] lg:right-[36%]"
        delay={1.0}
      />

      <FloatingCard
        type="students"
        className="hidden md:flex bottom-[10%] left-[5%] md:bottom-[15%] md:left-[15%] lg:left-[35%]"
        delay={1.2}
      />
    </div>
  );
};

export default HeroVisual;