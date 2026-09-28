import { Search } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="  mx-auto flex w-full flex-col items-center px-4 text-center">
      {/* Heading */}
      <h1 className=" text-[40px]  font-poppins leading-[1.1] tracking-[-1.5px] text-white sm:text-[52px] lg:text-[60px]">
        Get Access to Hundreds
        <br />
        Courses Available
      </h1>

      {/* Description */}
      <p className="mt-5  text-[13px] leading-6 text-white/90 sm:text-sm">
        Unlock your creativity, gain valuable knowledge, and grow your
        business with our wide range of courses.
      </p>

      {/* Search */}
      <div className="mt-8 flex w-full max-w-[480px] items-center justify-between rounded-full bg-white p-1.5 shadow-xl sm:max-w-[520px]">
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
      </div>
    </div>
  );
};

export default HeroContent;