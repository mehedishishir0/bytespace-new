"use client";

import React, { useState, useEffect } from "react";
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
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-brand/80 backdrop-blur-md shadow-lg border-b border-white/10 py-0" 
          : "bg-transparent py-2"
      }`}
    >
      <nav className="container mx-auto flex h-[70px] items-center justify-between px-6">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex w-auto md:w-1/3  gap-1.5 text-white">
          <div className="h-7 w-7 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="ByteSpace"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <h3 className="font-display text-2xl font-bold  tracking-wider text-white">
            ByteSpace
          </h3>
        </Link>

        <div className="hidden md:flex w-1/3 items-center justify-center gap-6 text-[13px] text-white/80">
          <Link href="/" className="relative transition-colors hover:text-white font-semibold text-white -translate-y-0.5">
            Home
          </Link>
          <Link href="/404" className="transition-colors hover:text-white font-normal">
            Courses
          </Link>
          <Link href="/404" className="transition-colors hover:text-white font-normal">
            Creators
          </Link>
        </div>

        {/* Right Navigation (Desktop) */}
        <div className="hidden md:flex w-1/3 items-center justify-end gap-5 text-[13px] text-white font-medium">
          <Link href="/sign-in" className="transition-colors hover:text-white/70">
            Sign In
          </Link>
          <Link href="/sign-up" className="transition-colors hover:text-white/70">
            Join Us
          </Link>
          <button aria-label="Shopping Cart" className="transition-transform hover:scale-110">
            <ShoppingBag size={18} />
          </button>
        </div>

        {/* Mobile Toggle Buttons (Using shadcn Sheet) */}
        <div className="flex items-center gap-4 text-white md:hidden">
          <Button aria-label="Shopping Cart" className="transition-transform hover:scale-110">
            <ShoppingBag size={20} />
          </Button>
          
          <Sheet>
            <SheetTrigger
              render={<Button aria-label="Menu" className="transition-transform hover:scale-110 focus:outline-none" />}
            >
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-brand border-l border-white/10 text-white w-[280px] sm:w-[320px] p-0 flex flex-col">
              
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
                <Link href="/404" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  <Home size={20} className="text-white/80" />
                  <span className="font-medium text-[15px]">Home</span>
                </Link>
                <Link href="/404" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  <BookOpen size={20} className="text-white/80" />
                  <span className="font-medium text-[15px]">Courses</span>
                </Link>
                <Link href="/404" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  <Users size={20} className="text-white/80" />
                  <span className="font-medium text-[15px]">Creators</span>
                </Link>
                
                <div className="my-4 mx-4 h-[1px] bg-white/10"></div>
                
                <Link href="/sign-in" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  <LogIn size={20} className="text-white/80" />
                  <span className="font-medium text-[15px]">Sign In</span>
                </Link>
              </div>

              {/* Sidebar Footer / CTA */}
              <div className="p-6 border-t border-white/10">
                <button className="w-full bg-brand-accent text-black font-bold py-3.5 rounded-full hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 text-[15px]">
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