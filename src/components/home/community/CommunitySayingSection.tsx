
import Testimonial from "./Testimonial";



const CommunitySayingSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-28">
      {/* Background Radial Gradients matching Figma design */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none -translate-y-1/4 translate-x-1/4 rounded-full"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)"
        }}
      />

        <div 
        className="absolute right-150 -top-10  w-[500px] h-[400px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(70% 60% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)"
        }}
      />

      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none -translate-x-1/3 translate-y-1/3 rounded-full"
        style={{
          background: "radial-gradient(60% 50% at 50% 50%, rgba(0, 59, 226, 0.22) 0%, rgba(0, 59, 226, 0.055) 53%, rgba(0, 59, 226, 0.015) 75%, rgba(0, 59, 226, 0) 100%)"
        }}
      />

  

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          {/* Main Title */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-poppins sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>

          {/* Subtitle Description */}
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
          <Testimonial/>

      </div>
    </section>
  );
};

export default CommunitySayingSection;