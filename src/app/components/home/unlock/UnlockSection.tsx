import Image from "next/image";
import Link from "next/link";

export default function UnlockSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 overflow-hidden bg-[#003be2] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px] lg:bg-[size:100px_100px]">

      {/* Decorative Floating Shapes */}

      {/* 1. Top-Left Green Spring - Visible on all devices */}
      <div className="absolute -top-5 -left-6 sm:-left-4 lg:left-0 w-[80px] sm:w-[120px] lg:w-[200px] h-[80px] sm:h-[120px] lg:h-[200px] z-10">
        <Image
          src="/images/unlock/top-left-green-spring.png"
          alt="Green spring decoration"
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 2. Top-Left White Spring - Hidden on mobile */}
      <div className="hidden sm:block absolute top-8 lg:top-16 left-[15%] lg:left-[18%] w-[60px] lg:w-[100px] h-[60px] lg:h-[100px] z-10">
        <Image
          src="/images/unlock/top-left-white-spring.png"
          alt="White spring decoration"
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 3. Bottom-Left White Cone - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-10 lg:bottom-20 -left-6 lg:-left-7 w-[120px] lg:w-[180px] h-[120px] lg:h-[180px] z-10">
        <Image
          src="/images/unlock/bottom-left-white-cone.png"
          alt="White cone decoration"
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 4. Bottom-Left Green Ring - Hidden on mobile */}
      <div className="hidden sm:block absolute -bottom-10 lg:-bottom-16 left-[20%] lg:left-[22%] w-[140px] lg:w-[220px] h-[140px] lg:h-[220px] z-10">
        <Image
          src="/images/unlock/bottom-left-green-ring.png"
          alt="Green ring decoration"
          width={220}
          height={220}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 5. Top-Right Green Pyramid - Hidden on mobile */}
      <div className="hidden sm:block absolute top-8 lg:top-12 right-[15%] lg:right-[20%] w-[90px] lg:w-[140px] h-[90px] lg:h-[140px] z-10">
        <Image
          src="/images/unlock/top-right-green-pyramid.png"
          alt="Green pyramid decoration"
          width={140}
          height={140}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 6. Mid-Right White Cylinder - Hidden on mobile */}
      <div className="hidden sm:block absolute top-[20%] lg:top-[15%] -right-10 lg:-right-15 w-[160px] lg:w-[260px] h-[160px] lg:h-[260px] z-10">
        <Image
          src="/images/unlock/mid-right-white-cylinder.png"
          alt="White cylinder decoration"
          width={260}
          height={260}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 7. Bottom-Right Green Spring - Visible on all devices */}
      <div className="absolute right-0 -bottom-8 sm:-bottom-12 lg:-bottom-16 w-[100px] sm:w-[180px] lg:w-[300px] h-[100px] sm:h-[180px] lg:h-[300px] z-10 flex items-end justify-end">
        <Image
          src="/images/unlock/Right-Green-Spring.png"
          alt="Green spring decoration"
          width={300}
          height={300}
          className="w-full h-full object-contain object-bottom object-right"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col items-center text-center mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <h2 className="text-[28px] sm:text-[40px] lg:text-[44px] font-poppins font-semibold text-white tracking-tight leading-[1.2] lg:leading-[1.15] drop-shadow-sm max-w-[850px]">
            Unlock Your Potential as a <br className="hidden sm:block" />
            Creator with ByteSpace
          </h2>

          <p className="text-white/90 text-[14px] sm:text-[16px] lg:text-[18px] max-w-[90%] sm:max-w-3xl lg:max-w-5xl leading-relaxed">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a
            part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your
            expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <div className="pt-2 sm:pt-4">
            <Link
              href="/join"
              className="inline-flex items-center justify-center bg-[#CBFC01] text-gray-900 font-bold text-[14px] sm:text-base px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full shadow-[0_8px_20px_rgba(203,252,1,0.25)] hover:scale-105 hover:shadow-[0_10px_25px_rgba(203,252,1,0.35)] transition-all duration-300"
            >
              Join as Creator
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}
