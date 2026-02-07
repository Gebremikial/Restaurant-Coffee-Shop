import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center px-6 lg:px-24 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center w-full">
        
        {/* Left Side: Content */}
        <div className="space-y-6 text-center lg:text-left z-10">
          <p className="text-[#BC9A6C] font-serif italic text-2xl lg:text-3xl animate-fade-in">
            Its Quick & Amusing!
          </p>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
            <span className="text-[#BC9A6C]">Th</span>e Art of speed <br />
            food Quality
          </h1>
          
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 text-base lg:text-lg">
            Meticulously crafted coffee and gourmet meals prepared with the freshest ingredients to fuel your day.
          </p>
          
          <div className="flex flex-col sm:row gap-4 justify-center lg:justify-start pt-4">
            <button className="bg-[#BC9A6C] text-white font-bold py-4 px-10 rounded-full hover:shadow-xl transition-all">
              See Menu
            </button>
            <button className="border border-[#BC9A6C] text-[#BC9A6C] font-medium py-4 px-10 rounded-full hover:bg-[#BC9A6C]/5 transition-all">
              Book a Table
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative flex justify-center items-center">
          {/* Decorative Circles */}
          <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] border border-[#BC9A6C]/20 rounded-full" />
          
          <div className="relative w-[280px] h-[280px] lg:w-[480px] lg:h-[480px]">
            <Image 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000" 
              alt="Premium Coffee" 
              fill 
              className="object-cover rounded-full border-8 border-white shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}