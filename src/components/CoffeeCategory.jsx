import Image from 'next/image';

const leftItems = [
  { title: "Cappuccino", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Cafe latte", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Dark coffee", desc: "Strong, bold, and pure black coffee." },
];

const rightItems = [
  { title: "Turkish coffee", desc: "Fine ground coffee boiled to perfection." },
  { title: "Pancakes", desc: "Fluffy pancakes served with maple syrup." },
  { title: "Coffee Bag", desc: "Freshly roasted beans for your home." },
];

export default function CoffeeCategory() {
  const textColor = "hsl(0, 0%, 31%)";

  return (
    <section className="py-20 px-6 lg:px-24" style={{ backgroundColor: 'hsl(0, 0%, 100%)' }}>
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: textColor }}>
          Coffee Category
        </h2>
        <p style={{ color: textColor }} className="opacity-70 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* LEFT SIDE: First 3 items */}
        <div className="flex-1 space-y-12 w-full">
          {leftItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 justify-end text-right">
              <div className="flex-1">
                <h3 className="text-xl font-bold" style={{ color: textColor }}>{item.title}</h3>
                <p className="text-sm opacity-60" style={{ color: textColor }}>{item.desc}</p>
              </div>
              <div className="w-16 h-16 rounded-full border border-[#BC9A6C] flex-shrink-0 flex items-center justify-center">
                <div className="w-8 h-8 border border-[#BC9A6C] rounded-md rotate-45" />
              </div>
            </div>
          ))}
        </div>

        {/* CENTER: Image */}
        {/* Note: If your file is img 21.jpg, change the extension below */}
        <div className="flex-1 relative w-full max-w-[400px] aspect-square flex justify-center items-center">
          <Image 
            src="/images/img-21.png" 
            alt="Main Coffee" 
            fill 
            className="object-contain"
            priority
          />
        </div>

        {/* RIGHT SIDE: Last 3 items */}
        <div className="flex-1 space-y-12 w-full">
          {rightItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 justify-start text-left">
              <div className="w-16 h-16 rounded-full border border-[#BC9A6C] flex-shrink-0 flex items-center justify-center">
                <div className="w-8 h-8 border border-[#BC9A6C] rounded-md rotate-45" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold" style={{ color: textColor }}>{item.title}</h3>
                <p className="text-sm opacity-60" style={{ color: textColor }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}