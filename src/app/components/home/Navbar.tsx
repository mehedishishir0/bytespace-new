import Image from "next/image";
import { Menu, ShoppingBag, Home, BookOpen, Users, LogIn, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent">
      <nav className="container mx-auto flex h-[70px] items-center justify-between px-6 bg-transparent">
        {/* Logo & Brand Name */}
        <div className="flex w-auto md:w-1/3 items-center gap-1.5 text-white">
          <div className="h-7 w-7 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="ByteSpace"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-white">
            ByteSpace
          </h3>
        </div>

        {/* Center Navigation (Desktop) */}
        <div className="hidden md:flex w-1/3 items-center justify-center gap-6 text-[13px] text-white font-medium">
          <a href="#" className="transition-colors hover:text-white/70">
            Home
          </a>
          <a href="#" className="transition-colors hover:text-white/70">
            Courses
          </a>
          <a href="#" className="transition-colors hover:text-white/70">
            Creators
          </a>
        </div>

        {/* Right Navigation (Desktop) */}
        <div className="hidden md:flex w-1/3 items-center justify-end gap-5 text-[13px] text-white font-medium">
          <a href="#" className="transition-colors hover:text-white/70">
            Sign In
          </a>
          <a href="#" className="transition-colors hover:text-white/70">
            Join Us
          </a>
          <button className="transition-transform hover:scale-110">
            <ShoppingBag size={18} />
          </button>
        </div>

        {/* Mobile Toggle Buttons (Using shadcn Sheet) */}
        <div className="flex items-center gap-4 text-white md:hidden">
          <Button className="transition-transform hover:scale-110">
            <ShoppingBag size={20} />
          </Button>
          
          <Sheet>
            <SheetTrigger>
              <Button className="transition-transform hover:scale-110 focus:outline-none">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#073BE5] border-l border-white/10 text-white w-[280px] sm:w-[320px] p-0 flex flex-col">
              
              {/* Sidebar Header with Logo */}
              <SheetHeader className="p-6 text-left border-b border-white/10 mt-4">
                <SheetTitle className="flex items-center gap-2 text-white">
                  <div className="h-7 w-7 flex-shrink-0">
                    <Image
                      src="/images/logo.png"
                      alt="ByteSpace"
                      width={120}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-display text-2xl font-bold tracking-tight">
                    ByteSpace
                  </span>
                </SheetTitle>
              </SheetHeader>

              {/* Sidebar Links */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-3">
                <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  <Home size={20} className="text-white/80" />
                  <span className="font-medium text-[15px]">Home</span>
                </a>
                <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  <BookOpen size={20} className="text-white/80" />
                  <span className="font-medium text-[15px]">Courses</span>
                </a>
                <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  <Users size={20} className="text-white/80" />
                  <span className="font-medium text-[15px]">Creators</span>
                </a>
                
                <div className="my-4 mx-4 h-[1px] bg-white/10"></div>
                
                <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  <LogIn size={20} className="text-white/80" />
                  <span className="font-medium text-[15px]">Sign In</span>
                </a>
              </div>

              {/* Sidebar Footer / CTA */}
              <div className="p-6 border-t border-white/10">
                <button className="w-full bg-[#CBFC01] text-black font-bold py-3.5 rounded-full hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 text-[15px]">
                  Join Us <ArrowRight size={18} />
                </button>
              </div>

            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;