import Image from "next/image";

export default function StudentGrowthSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 lg:py-28">
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
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gray-900 tracking-tight leading-[1.2]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-sm sm:text-[15px] text-gray-500 leading-relaxed max-w-[460px] mx-auto lg:mx-0">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Row */}
            <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-14 pt-4">
              <div className="flex flex-col items-start">
                <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#003BE2] leading-none mb-1">12K</h3>
                <p className="text-[12px] lg:text-[13px] text-gray-500 font-medium">Students</p>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#003BE2] leading-none mb-1">70+</h3>
                <p className="text-[12px] lg:text-[13px] text-gray-500 font-medium">Courses</p>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#003BE2] leading-none mb-1">16</h3>
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
                  fill
                  className="object-contain object-bottom drop-shadow-xl"
                />
              </div>

              {/* Floating Course Preview Card (Top Left) */}
              <div className="absolute top-10 lg:top-30 -left-6 sm:-left-8 lg:-left-12 bg-white rounded-[16px] lg:rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] w-[340px] sm:w-[400px]  lg:w-[400px] p-3 lg:p-4 z-30">
                <div className="relative h-[150px] sm:h-[200px] lg:h-[160px] w-full rounded-[8px] lg:rounded-[10px] overflow-hidden mb-3 lg:mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80"
                    alt="Course preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 lg:bottom-3 left-2 lg:left-3 flex gap-1.5 lg:gap-2">
                    <span className="bg-white/90 backdrop-blur-md text-[9px] lg:text-[11px] px-2 lg:px-3 py-1 lg:py-1.5 rounded-full font-medium text-gray-800">17 Lessons</span>
                    <span className="bg-white/90 backdrop-blur-md text-[9px] lg:text-[11px] px-2 lg:px-3 py-1 lg:py-1.5 rounded-full font-medium text-gray-800">2 hours 16 mins</span>
                  </div>
                </div>
                <h4 className="font-bold text-[14px] lg:text-[17px] text-gray-900 leading-tight px-1">Learn Figma from Basic</h4>
                <p className="text-[10px] lg:text-[12px] text-gray-500 mt-0.5 lg:mt-1 px-1">by <span className="text-[#003BE2] font-semibold">purepearl studio</span></p>

                <div className="flex items-center gap-2 lg:gap-4 mt-3 lg:mt-5 mb-3 lg:mb-5 px-1">
                  <span className="bg-gray-50 text-gray-700 text-[10px] lg:text-[12px] font-semibold px-2 lg:px-3 py-1 lg:py-2 rounded-lg lg:rounded-xl flex items-center gap-1 lg:gap-1.5">
                    <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 20V4" /></svg>
                    Beginner
                  </span>
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-[#FF6B6B]"></div>
                    <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-[#4DABF7]"></div>
                    <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-[#20C997]"></div>
                  </div>
                </div>

                <div className="flex items-center text-[#003BE2] font-bold text-base lg:text-xl px-1">
                  $25<span className="text-gray-400 text-[10px] lg:text-xs font-medium ml-1">/lifetime</span>
                </div>
              </div>

              {/* Learning Progress Card (Middle Right) */}
              <div className="absolute top-2/3 -translate-y-6 lg:-translate-y-8 -right-2 sm:-right-4 lg:-right-0 bg-white p-4 lg:p-6 rounded-[12px] lg:rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] w-[160px] sm:w-[200px] lg:w-[240px] z-50">
                <span className="text-[10px] lg:text-[13px] text-gray-600 font-medium block mb-1">Learning Progress</span>
                <h4 className="text-[28px] lg:text-[42px] font-extrabold text-gray-900 leading-none tracking-tight">55%</h4>
                <div className="w-full bg-gray-100 h-1.5 lg:h-2.5 rounded-full overflow-hidden mt-2 lg:mt-4">
                  <div className="bg-[#CBFC01] h-full w-[55%] rounded-full"></div>
                </div>
              </div>

              {/* Green Graphic Element - Hidden on mobile */}
              <div className="hidden lg:block absolute top-[60%] -translate-y-1/2 right-0 sm:-right-10 w-[200px] h-[200px] z-50">
                <Image
                  src="/images/hero/green1-shape.png"
                  alt="Green Shape"
                  fill
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