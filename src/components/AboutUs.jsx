import Image from 'next/image';
import { Check } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="relative z-10 py-16 lg:py-20 px-6 lg:px-20 bg-white overflow-hidden">
      {/* Container set to max-w-5xl for that tight, centered look */}
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: Compact Overlapping Image Layout */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-[85%] aspect-square lg:w-[85%]">
            <Image 
              src="/images/img-4.png" 
              alt="Pouring Milk" 
              fill 
              className="object-cover rounded-sm shadow-md"
              priority
            />
          </div>

          {/* Scaled down the floating image for better balance */}
          <div className="absolute -bottom-4 -left-2 lg:-left-4 w-[65%] aspect-video z-20">
            <Image 
              src="/images/img-5.png" 
              alt="Coffee Cup" 
              fill 
              className="object-cover rounded-sm shadow-lg"
            />
          </div>

          {/* Dot Pattern: Matches the subtle refined feel */}
          <div className="absolute top-1/2 -right-6 -translate-y-1/2 hidden xl:block z-0 opacity-15">
            <div className="grid grid-cols-6 gap-2.5">
              {[...Array(66)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[#BC9A6C] rounded-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Bold & Refined Content */}
        <div className="space-y-5 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <span className="text-[#BC9A6C] font-semibold tracking-[0.2em] uppercase text-[10px] lg:text-[11px]">
              About us
            </span>
            <div className="h-[1px] w-8 bg-[#BC9A6C]/70"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-[#1a1a1a]">
            We are the best quality <br className="hidden lg:block" /> Coffee maker
          </h2>

          {/* Updated: Bolded and resized to 13px per theme */}
          <p className="text-gray-500 font-bold leading-relaxed text-[13px] max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>

          <ul className="space-y-3 pt-1">
            {[
              "Experienced Chefs",
              "Fresh & Organic Foods",
              "Different Coffee & Drinks"
            ].map((item, index) => (
              <li key={index} className="flex items-center justify-center lg:justify-start gap-3">
                <div className={`flex items-center justify-center w-5 h-5 rounded-sm transition-colors ${index === 1 ? 'bg-[#1a1a1a] text-white' : 'bg-gray-100 text-[#BC9A6C]'}`}>
                  <Check size={12} strokeWidth={3} />
                </div>
                {/* Maximized bold font for list items */}
                <span className="font-bold text-[#1a1a1a] text-sm lg:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-3">
            <button className="mx-auto lg:mx-0 bg-[#BC9A6C] hover:bg-[#a6865a] text-white font-bold py-3 px-8 rounded-sm transition-all flex items-center gap-2 text-xs lg:text-sm uppercase tracking-widest">
              Learn More 
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}