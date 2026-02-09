import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center px-6 lg:px-20 overflow-hidden bg-[#0d0d0d]">
      
      {/* 1. DARK BACKGROUND WITH IMAGE PATTERN */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/img-1.png" 
          alt="Background Pattern"
          fill
          className="object-cover opacity-10 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/95 to-transparent"></div>
      </div>

      {/* 2. FLOATING BEANS */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-[20%] left-[48%] w-8 h-8 rotate-12 opacity-60 hidden lg:block">
          <Image src="/images/img-2.png" alt="coffee bean" fill className="object-contain" />
        </div>
        <div className="absolute top-[50%] left-[45%] w-10 h-10 -rotate-12 opacity-70 hidden lg:block">
          <Image src="/images/img-2.png" alt="coffee bean" fill className="object-contain" />
        </div>
      </div>

      {/* Main Container - Reduced to 5xl for centering */}
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full pt-8 relative z-10">
        
        {/* Left Side: Content */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Consistent small label style */}
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <span className="text-[#BC9A6C] font-semibold tracking-[0.2em] uppercase text-[10px] lg:text-[11px]">
              Welcome to coffee hut
            </span>
            <div className="h-[1px] w-8 bg-[#BC9A6C]/70"></div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
            Heal the world <br/> 
            <span className="text-[#BC9A6C]">with coffee</span>
          </h1>

          {/* Updated: Bolded and resized to 13px per theme */}
          <p className="text-gray-400 font-bold max-w-sm mx-auto lg:mx-0 text-[13px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Varius sed pharetra dictum neque massa congue.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <button className="bg-[#BC9A6C] hover:bg-[#a6865a] text-white font-bold py-3 px-8 rounded-sm transition-all text-xs lg:text-sm uppercase tracking-widest">
              Order now
            </button>
            <button className="border border-[#BC9A6C]/40 text-white hover:bg-[#BC9A6C]/10 font-bold py-3 px-8 rounded-sm transition-all text-xs lg:text-sm uppercase tracking-widest">
              See menu
            </button>
          </div>
        </div>

        {/* Right Side: Compact Image with Frame */}
        <div className="relative flex justify-center lg:justify-end items-center">
          {/* Decorative Frame */}
          <div className="absolute -top-3 -left-3 w-full h-full border border-[#BC9A6C]/20 translate-x-4 translate-y-4 hidden lg:block"></div>
          
          <div className="relative z-10 w-full max-w-[400px] aspect-square overflow-hidden shadow-2xl rounded-sm">
            <Image 
              src="/images/img-3.png" 
              alt="Premium Coffee" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Pagination dots scaled down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5 z-30">
        <div className="w-2 h-2 rounded-full bg-[#BC9A6C]"></div>
        <div className="w-2 h-2 rounded-full bg-white/20"></div>
        <div className="w-2 h-2 rounded-full bg-white/20"></div>
      </div>
    </section>
  );
}