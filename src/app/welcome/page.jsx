"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// 1. This component handles the dynamic URL and Storage data
function WelcomeUI() {
  const searchParams = useSearchParams();
  const [displayName, setDisplayName] = useState("Guest");

  useEffect(() => {
    // Only runs in the browser, so build won't fail
    const nameFromUrl = searchParams.get('name');
    const nameFromStorage = localStorage.getItem("userName");
    
    if (nameFromUrl) {
      setDisplayName(nameFromUrl);
    } else if (nameFromStorage) {
      setDisplayName(nameFromStorage);
    }
  }, [searchParams]);

  return (
    <div className="relative z-10 text-center space-y-8 animate-in fade-in zoom-in duration-700">
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[#BC9A6C] font-semibold tracking-[0.2em] uppercase text-[11px]">
            Registration Successful
          </span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
          Welcome, <br />
          <span className="text-[#BC9A6C]">{displayName}</span>
        </h1>
      </div>

      <p className="text-gray-400 font-bold max-w-sm mx-auto text-[13px] leading-relaxed">
        Your journey with Foodtuck begins here. We've saved your credentials. 
        You can now sign in and explore our premium coffee collection.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Link href="/login">
          <button className="w-full sm:w-auto bg-[#BC9A6C] hover:bg-[#a6865a] text-white font-bold py-4 px-10 rounded-sm transition-all text-xs uppercase tracking-widest shadow-lg">
            Sign In Now
          </button>
        </Link>
        <Link href="/">
          <button className="w-full sm:w-auto border border-white/20 text-white hover:bg-white/10 font-bold py-4 px-10 rounded-sm transition-all text-xs uppercase tracking-widest">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

// 2. The Main Page - The Suspense wrapper MUST be here
export default function WelcomePage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0d0d0d] px-6 overflow-hidden">
      {/* Background Style to match Hero/Footer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/img-1.png" 
          alt="Background" 
          fill 
          className="object-cover opacity-20 grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]"></div>
      </div>

      {/* This is the magic fix for the Build Error */}
      <Suspense fallback={
        <div className="text-white font-bold animate-pulse uppercase tracking-widest text-xs">
          Preparing your welcome...
        </div>
      }>
        <WelcomeUI />
      </Suspense>
    </section>
  );
}