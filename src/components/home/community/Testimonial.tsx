'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { testimonials } from "@/data/mockData";

const Testimonial = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8">
          {testimonials.map((item) => (
            <CarouselItem key={item.id} className="pl-4 md:pl-6 lg:pl-8 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full min-h-[320px]">
                {/* User Info Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-900 text-lg">{item.name}</h3>
                    <p className="text-xs sm:text-sm font-medium text-blue-600 mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                  {item.quote}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Testimonial;