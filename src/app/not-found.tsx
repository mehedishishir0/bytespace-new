import Link from "next/link";
import SharedBackground from "@/components/shared/SharedBackground";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand font-sans">
      <SharedBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl">
        
        {/* The 404 Background Text */}
        <div className="relative flex justify-center w-full">
          <h1 
            className="text-[180px] sm:text-[240px] md:text-[420px] font-black leading-[0.8] tracking-tighter select-none"
            style={{
              background: "linear-gradient(180deg, #CBFC01 20%, rgba(203, 252, 1, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }} 
          >
            404
          </h1>
        </div>
        
        {/* Foreground Content */}
        <div className="relative z-20 mt-5 sm:-mt-24 md:-mt-10 flex flex-col items-center">
          <h2 className="text-2xl sm:text-4xl font-poppins md:text-[54px] font-bold text-white leading-[1.1] mb-6">
            The page you are looking<br />
            for doesn't exist
          </h2>
          
          <p className="text-white/80 text-[10px] sm:text-xs md:text-sm font-medium mb-8 sm:mb-10 max-w-md">
            Try to use a correct url or go back to homepage to start again
          </p>
          
          <Link 
            href="/" 
            className="bg-brand-accent text-black text-sm md:text-base font-bold px-8 md:px-10 py-3 md:py-3.5 rounded-full hover:bg-brand-accent/90 transition-all hover:scale-105"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}
