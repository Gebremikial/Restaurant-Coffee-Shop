import Image from 'next/image';

const leftItems = [
  { title: "Cappuccino", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Cafe latte", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Dark coffee", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const rightItems = [
  { title: "Turkish coffee", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Pancakes", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Coffee Bag", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

export default function CoffeeCategory() {
  const IconBorder = ({ children }) => (
    <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center relative">
      <div className="absolute inset-0 border border-[#BC9A6C]/40 rounded-tl-[45%] rounded-br-[45%] rounded-tr-[15%] rounded-bl-[15%] rotate-[-5deg]" />
      <div className="z-10">{children}</div>
    </div>
  );

  return (
    <section id="categories" className="py-16 lg:py-20 px-6 lg:px-20 bg-white overflow-hidden">
      {/* Refined Header - matching the rest of the site */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-[#BC9A6C] font-semibold tracking-[0.15em] uppercase text-[10px] lg:text-[11px]">
            Our Categories
          </span>
          <div className="h-[1px] w-8 bg-[#BC9A6C]/70"></div>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-[#1a1a1a]">Coffee Category</h2>
        <p className="text-gray-400 max-w-lg mx-auto text-[13px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
        
        {/* BACKGROUND IMAGE - Stays large as requested */}
        <div className="absolute inset-0 z-0 flex justify-center items-center opacity-40 lg:opacity-100">
          <div className="relative w-full h-full max-w-[700px] aspect-square">
            <Image 
              src="/images/img-6.png" 
              alt="Premium Coffee Cup Background" 
              fill 
              className="object-contain drop-shadow-3xl scale-125 lg:scale-150" 
              priority
            />
          </div>
        </div>

        {/* OVERLAY CONTENT */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0">
          
          {/* LEFT COLUMN */}
          <div className="space-y-10 lg:space-y-16 w-full lg:w-1/3">
            {leftItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 justify-start text-left bg-white/20 backdrop-blur-md lg:bg-transparent p-2 rounded-md transition-transform hover:translate-x-1">
                <IconBorder>
                  <svg className="w-6 h-6 text-[#BC9A6C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
                  </svg>
                </IconBorder>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-0.5">{item.title}</h3>
                  <p className="text-[12px] lg:text-[13px] font-bold text-gray-600 leading-tight max-w-[180px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Spacer for the background cup */}
          <div className="hidden lg:block lg:w-1/3"></div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10 lg:space-y-16 w-full lg:w-1/3">
            {rightItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 justify-end text-right bg-white/20 backdrop-blur-md lg:bg-transparent p-2 rounded-md transition-transform hover:-translate-x-1">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-0.5">{item.title}</h3>
                  <p className="text-[12px] lg:text-[13px] font-bold text-gray-600 leading-tight max-w-[180px] ml-auto">
                    {item.desc}
                  </p>
                </div>
                <IconBorder>
                  <svg className="w-6 h-6 text-[#BC9A6C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </IconBorder>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}