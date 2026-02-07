import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function AboutUs() {
  return (
    <section className="relative py-20 px-6 lg:px-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Staggered Images */}
        <div className="relative">
          {/* Main Large Image (Top Right) */}
          <div className="relative w-[80%] aspect-[4/5] ml-auto rounded-lg overflow-hidden shadow-2xl">
            <Image 
                src="/images/img-16.png" 
                alt="About Us" 
                fill 
                className="object-cover" 
            />
          </div>

          {/* Overlapping Smaller Image (Bottom Left) */}
          <div className="absolute bottom-[-10%] left-0 w-[60%] aspect-square rounded-lg overflow-hidden border-8 border-[#0D0D0D] shadow-2xl z-20">
            <Image 
                src="/images/img-14.png" 
                alt="Coffee" 
                fill 
                className="object-cover" 
            />
          </div>

          {/* Decorative Dot Pattern (Middle) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-32 opacity-20 z-10 hidden md:block" 
               style={{ backgroundImage: 'radial-gradient(#BC9A6C 2px, transparent 2px)', backgroundSize: '15px 15px' }}>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6 text-white">
          <div className="space-y-2">
            <p className="text-black font-tight text-xl">About us</p>
            <h2 className="text-black text-4xl lg:text-5xl font-bold leading-tight">
              We are the best quality <br /> Coffee maker
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>

          {/* Features List */}
          <ul className="space-y-4 pt-2">
            {[
              "Experienced Chefs",
              "Fresh & Organic Foods",
              "Different Coffee & Drinks"
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-[#BC9A6C]/20 rounded flex items-center justify-center">
                  <CheckIcon className="w-4 h-4 text-[#BC9A6C]" />
                </div>
                <span className="text-black font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="mt-4 bg-[#BC9A6C] text-white py-3 px-10 rounded-md hover:bg-[#a6865a] transition-all flex items-center gap-2 group">
            Learn More
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}