import Image from "next/image";
import LearningProgressCard from "../../shared/LearningProgressCard";
import SharedCourseCard from "../../shared/SharedCourseCard";
import { courses } from "@/data/mockData";

export default function StudentGrowthSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white  pb-4 lg:pb-10">
      {/* Radial Gradient background */}
      <div
        className="absolute top-0 left-1/2 lg:left-1/5 w-[500px] lg:w-[800px] h-[500px] lg:h-[700px] -translate-x-1/2 lg:-translate-x-1/2 -translate-y-1/4 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)"
        }}
      />
      <div
        className="absolute -top-10 lg:-top-20 -right-20 lg:-right-10 w-[400px] lg:w-[500px] h-[400px] lg:h-[600px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.0184) 53%, rgba(0, 59, 226, 0.0048) 75%, rgba(0, 59, 226, 0) 100%)"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 space-y-5 lg:space-y-6 lg:pr-10 text-center lg:text-left">
            <h2 className="text-3xl font-poppins sm:text-4xl lg:text-[44px] font-bold text-gray-900 tracking-tight leading-[1.2]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-sm sm:text-[15px] text-gray-500 leading-relaxed max-w-[460px] mx-auto lg:mx-0">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Row */}
            <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-14 pt-4">
              <div className="flex flex-col items-start">
                <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-brand leading-none mb-1">12K</h3>
                <p className="text-[12px] lg:text-[13px] text-gray-500 font-medium">Students</p>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-brand leading-none mb-1">70+</h3>
                <p className="text-[12px] lg:text-[13px] text-gray-500 font-medium">Courses</p>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-brand leading-none mb-1">16</h3>
                <p className="text-[12px] lg:text-[13px] text-gray-500 font-medium">Creators</p>
              </div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="w-full lg:w-1/2 relative flex justify-center mt-12 lg:mt-0 lg:justify-end">
            {/* Scaled down container for mobile */}
            <div className="relative w-[300px] sm:w-[400px] lg:w-[550px] h-[400px] sm:h-[500px] lg:h-[650px] flex items-end justify-center">

              {/* Main Student Local Image */}
              <div className="absolute bottom-0 w-[280px] sm:w-[380px] lg:w-[480px] h-[400px] sm:h-[500px] lg:h-[650px] z-40">
                <Image
                  src="/images/hero/hero-person.png"
                  alt="Student with laptop"
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-bottom drop-shadow-xl"
                />
              </div>

              {/* Floating Course Preview Card (Top Left) */}
              <SharedCourseCard 
                isFloating={true} 
                course={courses[0]}
                className="absolute top-10 lg:top-30 -left-6 sm:-left-8 lg:-left-12 z-30 w-[340px] sm:w-[400px] lg:w-[400px]"
              />

              {/* Learning Progress Card (Middle Right) */}
              <LearningProgressCard 
                className="absolute top-2/3 -translate-y-6 lg:-translate-y-8 -right-2 sm:-right-4 lg:-right-0 z-50 w-[160px] sm:w-[200px] lg:w-[240px]" 
              />

              {/* Green Graphic Element - Hidden on mobile */}
              <div className="hidden lg:block absolute top-[60%] -translate-y-1/2 right-0 sm:-right-10 w-[200px] h-[200px] z-50">
                <Image
                  src="/images/hero/green1-shape.png"
                  alt="Green Shape"
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}