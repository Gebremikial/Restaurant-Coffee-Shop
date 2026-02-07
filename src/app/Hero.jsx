import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center px-6 lg:px-24">
      
      {/* DARK OVERLAY: 
        This makes the background pattern subtle and ensures the white text pops.
        Adjust 'bg-black/80' to 'bg-black/60' if you want the beans to be brighter.
      */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Decorative Blur Effect */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-[hsl(34,37%,58%)]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center w-full pt-20 z-10">
        
        {/* Left Side: Content */}
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-[hsl(34,37%,58%)] font-serif italic text-2xl lg:text-3xl animate-fade-in">
            Its Quick & Amusing!
          </p>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
            <span className="text-[hsl(34,37%,58%)]">Th</span>e Art of speed <br />
            food Quality
          </h1>
          
          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-base lg:text-lg leading-relaxed">
            Meticulously crafted coffee and gourmet meals prepared with the freshest ingredients to fuel your day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button className="bg-[hsl(34,37%,58%)] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-all shadow-lg active:scale-95">
              See Menu
            </button>
            <button className="border border-[hsl(34,37%,58%)] text-white font-medium py-4 px-10 rounded-full hover:bg-[hsl(34,37%,58%)]/10 transition-all">
              Book a Table
            </button>
          </div>
        </div>

        {/* Right Side: Circular Hero Image */}
        <div className="relative flex justify-center items-center">
          {/* Circular Rings (Branding Colors) */}
          <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] border border-[hsl(34,37%,58%)]/30 rounded-full" />
          <div className="absolute w-[340px] h-[340px] lg:w-[560px] lg:h-[560px] border border-white/5 rounded-full" />
          
          <div className="relative w-[280px] h-[280px] lg:w-[480px] lg:h-[480px]">
            <Image 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000" 
              alt="Premium Coffee" 
              fill 
              className="object-cover rounded-full border-8 border-zinc-900 shadow-2xl"
              priority
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-2 -right-2 bg-white p-4 rounded-2xl shadow-2xl hidden lg:block">
            <p className="text-black font-bold text-sm">Best Quality</p>
            <p className="text-[hsl(34,37%,58%)] text-xs font-semibold">Freshly Brewed</p>
          </div>
        </div>

      </div>
    </section>
  );
}