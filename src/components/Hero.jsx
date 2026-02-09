import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-20 overflow-hidden bg-[#0a0a0a]">
      
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

      {/* 2. FLOATING TINY BEANS (img-2.png) */}
      {/* These are positioned absolutely relative to the section */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Bean 1 - Top Center */}
        <div className="absolute top-[15%] left-[45%] w-12 h-12 rotate-12 opacity-80 hidden lg:block">
          <Image src="/images/img-2.png" alt="coffee bean" fill className="object-contain" />
        </div>
        
        {/* Bean 2 - Middle Center */}
        <div className="absolute top-[45%] left-[40%] w-16 h-16 -rotate-12 opacity-90 hidden lg:block">
          <Image src="/images/img-2.png" alt="coffee bean" fill className="object-contain" />
        </div>

        {/* Bean 3 - Near Header */}
        <div className="absolute top-[25%] left-[55%] w-10 h-10 rotate-[45deg] opacity-70 hidden lg:block">
          <Image src="/images/img-2.png" alt="coffee bean" fill className="object-contain" />
        </div>

        {/* Bean 4 - Bottom Left of Image */}
        <div className="absolute bottom-[20%] left-[50%] w-14 h-14 -rotate-45 opacity-80 hidden lg:block">
          <Image src="/images/img-2.png" alt="coffee bean" fill className="object-contain" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full pt-16 relative z-10">
        
        {/* Left Side: Content */}
        <div className="space-y-8">
          <div className="flex justify-center lg:justify-start">
            <div className="border border-[#BC9A6C] px-4 py-1 rounded-sm bg-[#0d0d0d]/50">
              <span className="text-[#BC9A6C] font-serif italic text-xl lg:text-2xl block">
                Welcome to coffee hut
              </span>
            </div>
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold leading-tight text-white tracking-tight">
            Heal the world <br/> 
            <span className="text-[#BC9A6C]">with coffee</span>
          </h1>

          <p className="text-gray-400 max-w-md text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Varius sed pharetra dictum neque massa congue.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="bg-[#BC9A6C] hover:bg-[#a6865a] text-white font-bold py-4 px-12 rounded-sm transition-all duration-300">
              Order now
            </button>
            <button className="border border-[#BC9A6C] text-white hover:bg-[#BC9A6C]/10 font-bold py-4 px-12 rounded-sm transition-all duration-300">
              See menu
            </button>
          </div>
        </div>

        {/* Right Side: Image with Frame */}
        <div className="relative flex justify-center lg:justify-end items-center">
          {/* Decorative Gold Frame */}
          <div className="absolute -top-4 -left-4 w-full h-full border border-[#BC9A6C]/40 translate-x-8 translate-y-8 hidden lg:block"></div>
          
          <div className="relative z-10 w-full max-w-[550px] aspect-square overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <Image 
              src="/images/img-3.jpg" 
              alt="Premium Coffee" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        <div className="w-3 h-3 rounded-full bg-[#BC9A6C]"></div>
        <div className="w-3 h-3 rounded-full bg-gray-600"></div>
        <div className="w-3 h-3 rounded-full bg-gray-600"></div>
      </div>
    </section>
  );
}