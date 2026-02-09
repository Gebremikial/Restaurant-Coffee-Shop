import Image from 'next/image';
import { Check } from 'lucide-react'; // Make sure to install lucide-react or use a custom SVG

export default function AboutUs() {
  const textColor = "#333333";

  return (
    <section className="relative z-10 py-20 px-6 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Overlapping Image Layout */}
        <div className="relative">
          {/* Main Large Image */}
          <div className="relative w-full aspect-[4/5] lg:w-[90%]">
            <Image 
              src="/images/img-4.png" // Updated to .png per your sidebar
              alt="Pouring Milk" 
              fill 
              className="object-cover rounded-sm shadow-md"
              priority
            />
          </div>

          {/* Overlapping Small Image */}
          <div className="absolute -bottom-10 -left-6 w-[60%] aspect-video border-8 border-white shadow-2xl z-20">
            <Image 
              src="/images/img-5.png" // Updated to .png per your sidebar
              alt="Coffee Cup" 
              fill 
              className="object-cover"
            />
          </div>

          {/* Decorative Dot Pattern (Centered between columns) */}
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 hidden xl:block z-0 opacity-40">
            <div className="grid grid-cols-5 gap-4">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#BC9A6C]" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6 lg:pl-10">
          <div className="flex items-center gap-2">
            <span className="text-[#BC9A6C] font-medium tracking-widest uppercase text-sm">
              About us
            </span>
            <div className="h-[1px] w-12 bg-[#BC9A6C]"></div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-[#1a1a1a]">
            We are the best quality <br /> Coffee maker
          </h2>

          <p className="text-gray-500 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>

          {/* Features List */}
          <ul className="space-y-4 pt-4">
            {[
              "Experienced Chefs",
              "Fresh & Organic Foods",
              "Different Coffee & Drinks"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4 group">
                <div className={`flex items-center justify-center w-8 h-8 rounded-sm transition-colors ${index === 1 ? 'bg-[#333] text-white' : 'bg-gray-100 text-gray-400'}`}>
                  <Check size={18} strokeWidth={3} />
                </div>
                <span className="font-bold text-[#333] text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-8 bg-[#BC9A6C] hover:bg-[#a6865a] text-white font-bold py-4 px-10 rounded-sm transition-all flex items-center gap-2">
            Learn More 
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}