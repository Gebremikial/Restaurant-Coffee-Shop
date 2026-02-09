import Image from 'next/image';

const partners = [
  { id: 1, name: "Partner 1", src: "/images/img-2.png" }, 
  { id: 2, name: "Partner 2", src: "/images/img-2.png" },
  { id: 3, name: "Partner 3", src: "/images/img-2.png" },
  { id: 4, name: "Partner 4", src: "/images/img-2.png" },
  { id: 5, name: "Partner 5", src: "/images/img-2.png" },
  { id: 6, name: "Partner 6", src: "/images/img-2.png" },
];

export default function Connection() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Refined Header - matching smaller scale */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#BC9A6C] font-semibold tracking-[0.15em] uppercase text-[10px] lg:text-[11px]">
              Partners & Clients
            </span>
            <div className="h-[1px] w-8 bg-[#BC9A6C]/70"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a]">
            We work with the best people
          </h2>
        </div>

        {/* Partners/Logos Grid - More compact and centered */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-12">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="relative w-24 h-16 md:w-32 md:h-20 grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-105"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}