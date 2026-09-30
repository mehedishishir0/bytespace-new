'use client';

import React from "react";
import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { motion } from "framer-motion";

interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

export default function AuthForm({ type }: AuthFormProps) {
  const isSignUp = type === "sign-up";

  return (
    <div className="flex items-center justify-center px-4 z-10 w-full">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="bg-white w-full max-w-lg p-6 sm:p-10 rounded-[35px] shadow-2xl"
      >
        <span className="text-xs text-blue-600 tracking-wider uppercase mb-2 block">
          {isSignUp ? "Create an Account" : "Sign In"}
        </span>
        <h2 className="text-3xl sm:text-[44px] sm:leading-[56px] font-semibold font-poppins font-extrabold text-slate-900 mb-6 sm:mb-8">
          {isSignUp ? "Welcome to ByteSpace" : "Welcome Back"}
        </h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {isSignUp && (
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jamie Davis"
                className="w-full px-4 py-3.5 rounded-[14px] bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="designer@example.com"
              className="w-full px-4 py-3.5 rounded-[14px] bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-2 ">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
            />
          </div>

          {!isSignUp ? (
            <div className="grid grid-cols-2">
              <div>

              </div>
              <button
                type="submit"
                className="w-full py-4 bg-brand-accent hover:bg-brand-accent/90 text-slate-900 font-bold rounded-full shadow-md mt-4 transition-transform active:scale-[0.99]"
              >
                Sign In
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2">
              <div>

              </div>
              <button
                type="submit"
                className="w-full py-4 bg-brand-accent hover:bg-brand-accent/90 text-slate-900 font-bold rounded-full shadow-md mt-4 transition-transform active:scale-[0.99]"
              >
                Continue
              </button>
            </div>
          )}
        </form>

        {!isSignUp && (
          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative bg-white px-4 text-[10px] text-slate-400 uppercase font-medium">
                or
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                className="w-16 h-16 rounded-[20px] border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition shadow-sm"
              >
                <FaFacebook className="w-10 h-10 " />

              </button>
              <button
                type="button"
                className="w-16 h-16 rounded-[20px] border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition shadow-sm"
              >
                <div className="w-10 h-10  flex items-center justify-center text-black font-extrabold text-xl">
                  <FaGoogle className="w-10 h-10 " />
                </div>
              </button>
            </div>
          </div>
        )}

        <p className="text-center text-xs text-slate-500 mt-8">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <Link href="/sign-in" className="text-blue-600 font-semibold hover:underline">
                Login
              </Link>
            </>
          ) : (
            <>
              New user?{" "}
              <Link href="/sign-up" className="text-blue-600 font-semibold hover:underline">
                Create an account
              </Link>
            </>
          )}
        </p>
      </motion.div>
    </div>
  );
}
