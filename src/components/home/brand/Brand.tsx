"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brands } from "@/data/mockData";

const Brand = () => {

  // Duplicate for seamless infinite scrolling
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="w-full py-10 bg-[#F5F5F6] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Mobile Marquee (Hidden on md+) */}
        <div className="md:hidden flex w-full">
          <motion.div
            className="flex gap-8 whitespace-nowrap min-w-max pr-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex items-center opacity-80"
              >
                <div className="relative h-16 w-36">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Static Layout (Hidden on mobile) */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-25">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center opacity-80 transition-opacity hover:opacity-100"
            >
              <div className="relative h-20 w-44">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Brand;