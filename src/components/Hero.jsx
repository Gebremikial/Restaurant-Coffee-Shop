import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#0D0D0D] min-h-screen flex items-center px-6 lg:px-20 overflow-hidden">
      {/* Background Decorative Element (Optional) */}
      <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-brandGold rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full pt-16">
        
        {/* Left Side: Content */}
        <div className="z-10 space-y-6">
          <div className="inline-block">
            <span className="text-brandGold font-script text-2xl lg:text-3xl italic block mb-2">
              Its Quick & Amusing!
            </span>
            <div className="h-[2px] w-full bg-brandGold"></div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
            <span className="text-brandGold">The</span> Art of speed <br />
            food Quality
          </h1>

          <p className="text-gray-300 max-w-md text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Varius sed pharetra dictum neque massa congue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-brandGold hover:bg-[#c48f4d] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg">
              See Menu
            </button>
          </div>
        </div>

        {/* Right Side: Image with the "Double Frame" effect */}
        <div className="relative flex justify-center lg:justify-end items-center">
          {/* Decorative Gold Circles/Frames */}
          <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] border-2 border-brandGold rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] border border-white/10 rounded-full"></div>
          
          {/* Main Hero Image */}
          <div className="relative z-10 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
            <Image 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000" 
              alt="Fresh Coffee and Food" 
              fill
              className="object-cover rounded-full border-4 border-[#1e1e1e] shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}