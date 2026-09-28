import Navbar from "../Navbar";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section className="relative h-[850px] w-full overflow-hidden bg-[#073BE5] pt-[100px] md:pt-[80px]">
    
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main Content */}
      <div className=" z-10 mx-auto h-full flex flex-col items-center justify-start">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;