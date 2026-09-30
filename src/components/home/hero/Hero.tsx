
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import SharedBackground from "../../shared/SharedBackground";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-[140px] md:pt-[140px]">
      <SharedBackground />

      {/* Main Content */}
      <div className="relative z-10 mx-auto h-full flex flex-col items-center justify-start">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;