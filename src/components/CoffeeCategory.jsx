import Image from 'next/image';

const leftItems = [
  { title: "Cappuccino", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi." },
  { title: "Cafe latte", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi." },
  { title: "Dark coffee", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi." },
];

const rightItems = [
  { title: "Turkish coffee", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi." },
  { title: "Pancakes", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi." },
  { title: "Coffee Bag", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi." },
];

export default function CoffeeCategory() {
  const IconBorder = ({ children }) => (
    <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center relative">
      <div className="absolute inset-0 border border-[#BC9A6C] rounded-tl-[45%] rounded-br-[45%] rounded-tr-[15%] rounded-bl-[15%] rotate-[-5deg]" />
      <div className="z-10">{children}</div>
    </div>
  );

  return (
    <section className="py-24 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-[#1a1a1a]">Coffee Category</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* LEFT SIDE: ICON -> TEXT */}
        <div className="flex-1 space-y-16 w-full z-10">
          {leftItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 justify-start text-left">
              <IconBorder>
                <svg className="w-10 h-10 text-[#BC9A6C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
                </svg>
              </IconBorder>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER: LARGER IMAGE (No Background) */}
        <div className="flex-[1.5] relative w-full min-h-[600px] flex justify-center items-center">
          <div className="relative z-10 w-full h-full max-w-[550px] aspect-square">
            <Image 
              src="/images/img-6.png" 
              alt="Premium Coffee Cup" 
              fill 
              className="object-contain drop-shadow-2xl scale-110" // scale-110 makes it larger
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE: TEXT -> ICON */}
        <div className="flex-1 space-y-16 w-full z-10">
          {rightItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 justify-end text-right">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs ml-auto">{item.desc}</p>
              </div>
              <IconBorder>
                <svg className="w-10 h-10 text-[#BC9A6C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </IconBorder>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}