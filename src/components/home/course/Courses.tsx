import { Share2 } from "lucide-react";
import Image from "next/image";

import { categories, courses } from "@/data/mockData";

const CoursesSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl  mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl leading-16 font-extrabold font-poppins text-gray-900 tracking-tight">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Categories / Tags Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((category, index) => {
            const isFeatured = category === "Featured";
            return (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isFeatured
                    ? "bg-brand-accent text-gray-900 shadow-sm font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
              <article
                key={course.id}
                className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Course Image & Overlay Badges */}
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    {/* Floating Badges inside Image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between ">
                      <span className="backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] text-white font-medium">{course.lessons}</span>
                      <span className="backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] text-white font-medium">{course.duration}</span>
                      <span className="backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] text-white font-medium">{course.comments}</span>
                    </div>
                  </div>

                  {/* Title & Rating */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-base line-clamp-1 font-poppins">
                      {course.title}
                    </h3>
                    <span className="text-xs font-semibold text-gray-800 flex items-center gap-0.5 whitespace-nowrap">
                      {course.rating} <span className="text-yellow-400">★</span>
                    </span>
                  </div>

                  {/* Creator info */}
                  <p className="text-xs text-gray-500 mb-4">
                    by <span className="text-gray-700 font-medium">{course.creator}</span>
                  </p>
                </div>

                <div>
                  {/* Level and Students Avatars */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 mb-4">
                    <span className="bg-gray-100 text-gray-700 text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1">
                      <Share2 className="w-3 h-3"/>
                      {course.level}
                    </span>

                    {/* Stacked Avatars */}
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
                  </div>

                  {/* Price */}
                  <div className="flex items-center">
                    <span className="text-brand font-bold text-base">
                      {course.price.split("/")[0]}
                    </span>
                    <span className="text-gray-400 text-xs ml-0.5">
                      /{course.price.split("/")[1]}
                    </span>
                  </div>
                </div>
              </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;