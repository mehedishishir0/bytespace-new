import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";

export default function CreatorManagementSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 lg:py-28">
      {/* Radial Gradient background */}
      <div 
        className="absolute right-0 bottom-0 lg:top-60 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(60% 60% at 50% 50%, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.0368) 53%, rgba(0, 59, 226, 0.0096) 75%, rgba(0, 59, 226, 0) 100%)"
        }}
      />
      <div 
        className="absolute bottom-10 -left-10 lg:left-0 w-[500px] lg:w-[700px] h-[500px] lg:h-[700px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(70% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Visual Element */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start mt-12 lg:mt-0">
            {/* Scaled down container for mobile */}
            <div className="relative w-[300px] sm:w-[400px] lg:w-[550px] h-[400px] sm:h-[500px] lg:h-[650px] mx-auto lg:ml-10">
              
              {/* Creator Local Image */}
              <div className="absolute bottom-0 w-[280px] sm:w-[380px] lg:w-[500px] h-[400px] sm:h-[500px] lg:h-[650px] z-40 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0">
                <Image
                  src="/images/hero/girl-person.png"
                  alt="Creator with tablet"
                  fill
                  className="object-contain object-bottom drop-shadow-xl"
                />
              </div>

              {/* Total Revenue Card (Top Left) */}
              <div className="absolute top-6 sm:top-10 lg:top-16 -left-2 sm:-left-6 lg:-left-6 bg-[#003be2] text-white p-4 lg:p-6 rounded-[20px] lg:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-[180px] sm:w-[220px] lg:w-[240px] z-30">
                <p className="text-[10px] lg:text-[13px] text-white/90 font-medium">Total Revenue</p>
                <p className="text-[8px] lg:text-[10px] text-white/70 mb-2 lg:mb-4 mt-0.5">July 1-28</p>
                <h4 className="text-[22px] lg:text-[32px] font-bold mt-1 mb-3 lg:mb-5 leading-none">$120.29</h4>
                <div className="w-full bg-[#0028a3] h-1.5 lg:h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#CBFC01] h-full w-[65%] rounded-full"></div>
                </div>
              </div>

              {/* Year to Date Card (Middle Left) */}
              <div className="absolute top-[180px] sm:top-[220px] lg:top-[280px] -left-4 sm:-left-10 lg:-left-20 bg-[#003be2] p-3 lg:p-5 rounded-[16px] lg:rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-[140px] sm:w-[160px] lg:w-[180px] z-30">
                <p className="text-[10px] lg:text-[13px] text-white/90 font-medium">Year to Date</p>
                <p className="text-[8px] lg:text-[10px] text-white/70 mb-2 lg:mb-3 mt-0.5">2023</p>
                <h4 className="text-[18px] lg:text-[26px] font-bold text-white mb-2 lg:mb-4 leading-none">$1,200.38</h4>
                <span className="inline-block bg-[#CBFC01] text-gray-900 text-[8px] lg:text-[10px] font-bold px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full">
                  +12%
                </span>
              </div>

              {/* Happy Students Card (Bottom Right) */}
              <div className="absolute bottom-10 sm:bottom-20 lg:bottom-40 -right-2 sm:-right-4 lg:right-0 bg-white p-3 rounded-[12px] lg:rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] w-[180px] sm:w-[240px] lg:w-[280px] z-50">
                <p className="text-[13px] lg:text-[16px] font-semibold text-gray-900">Happy Students</p>
                <p className="text-[10px] lg:text-[12px] text-gray-500 flex items-center gap-1 mt-0.5 lg:mt-0">
                  4.5 (240) <span className="text-[#CBFC01] text-[12px] lg:text-[16px] -mt-0.5">★</span>
                </p>
                <div className="flex items-center mt-2 lg:mt-3">
                  <div className="flex -space-x-2 lg:-space-x-3">
                    <div className="w-6 h-6 lg:w-9 lg:h-9 rounded-full border-[2px] lg:border-[3px] border-white bg-gray-200 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-6 h-6 lg:w-9 lg:h-9 rounded-full border-[2px] lg:border-[3px] border-white bg-gray-300 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-6 h-6 lg:w-9 lg:h-9 rounded-full border-[2px] lg:border-[3px] border-white bg-gray-400 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-6 h-6 lg:w-9 lg:h-9 rounded-full border-[2px] lg:border-[3px] border-white bg-gray-500 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover"/>
                    </div>
                  </div>
                  <span className="z-10 -ml-2 lg:-ml-3 flex w-6 h-6 lg:w-9 lg:h-9 items-center justify-center rounded-full border-[2px] lg:border-[3px] border-white bg-[#CBFC01] text-[8px] lg:text-[11px] font-bold text-gray-900">
                    2K+
                  </span>
                </div>
              </div>

              {/* Green Graphic Element - Hidden on mobile */}
              <div className="hidden lg:block absolute top-[25%] rotate-45 right-4 sm:right-32 w-[200px] h-[180px] z-50">
                <Image
                  src="/images/hero/green1-shape.png"
                  alt="Green Shape"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 space-y-5 lg:space-y-6 lg:pl-16 z-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gray-900 tracking-tight leading-[1.15]">
              Create & Manage <br className="hidden lg:block"/>
              Courses Easily.
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-[440px] mx-auto lg:mx-0">
              <strong className="text-gray-800 font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist items */}
            <ul className="space-y-3 lg:space-y-5 pt-2 flex flex-col items-center lg:items-start inline-flex text-left mx-auto lg:mx-0">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 lg:gap-4 text-[14px] sm:text-base text-gray-700 font-medium w-full max-w-[280px] lg:max-w-none">
                  <MdCheckCircle className="text-[#003BE2] w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}