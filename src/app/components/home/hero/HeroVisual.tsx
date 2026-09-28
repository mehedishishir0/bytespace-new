import Image from "next/image";
import FloatingCard from "./FloatingCard";

const HeroVisual = () => {
  return (
    <div className="relative mx-auto mt-10 flex-1 w-full">
      <Image
        src="/images/hero/green-left-decoration.png"
        alt=""
        width={180}
        height={220}
        className="hidden lg:block absolute left-[-5%] top-[30%] z-10 w-[140px] md:left-[19%] lg:w-[280px]"
      />
      <Image
        src="/images/hero/white-squiggle-left.png"
        alt=""
        width={120}
        height={120}
        className="hidden lg:block absolute left-[10%] top-[0%] z-10 w-[90px] md:left-[15%] lg:w-[160px]"
      />

      <Image
        src="/images/hero/right-green shape.png"
        alt=""
        width={180}
        height={200}
        className="hidden lg:block absolute right-[0%] bottom-[80%] z-10 w-[150px] md:left-[0%] lg:w-[200px]"
      />

      <div className="absolute bottom-0 left-1/2 z-0 h-[280px] w-[560px] -translate-x-1/2 rounded-t-full bg-[#CBFC01] md:h-[350px] md:w-[700px] lg:h-[450px] lg:w-[900px]"></div>

      <Image
        src="/images/hero/neon-green.png"
        alt=""
        width={100}
        height={100}
        className="hidden lg:block absolute right-[10%] bottom-[80%] z-10 w-[80px] md:right-[0%] lg:w-[150px]"
      />
      <Image
        src="/images/hero/white-squiggle-right.png"
        alt=""
        width={420}
        height={220}
        className="hidden lg:block absolute right-[5%] top-[40%] z-[999] w-[100px] md:right-[15%] lg:w-[260px]"
      />
      <Image
        src="/images/hero/triangle.png"
        alt=""
        width={130}
        height={130}
        className="hidden lg:block absolute right-[5%] top-[0%] z-[999] w-[100px] md:right-[24%] lg:w-[160px]"
        style={{ zIndex: 999 }}
      />

      <Image
        src="/images/hero/hero-person.png"
        alt="Student"
        width={600}
        height={650}
        className="absolute bottom-0 left-1/2 z-20 w-[420px] -translate-x-1/2 object-cover md:w-[500px] lg:w-[550px]"
      />

      <FloatingCard
        type="uiux"
        className="hidden md:flex left-[2%] top-[15%] md:left-[10%] lg:left-[36%]"
      />

      <FloatingCard
        type="progress"
        className="hidden md:flex right-[2%] top-[15%] md:right-[10%] lg:right-[36%]"
      />

      <FloatingCard
        type="students"
        className="hidden md:flex bottom-[10%] left-[5%] md:bottom-[15%] md:left-[15%] lg:left-[35%]"
      />
    </div>
  );
};

export default HeroVisual;