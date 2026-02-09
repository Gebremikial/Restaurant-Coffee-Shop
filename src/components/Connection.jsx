import Image from 'next/image';

const partners = [
  { id: 1, name: "Restaurant", src: "/images/logo-1.png" },
  { id: 2, name: "Bakery", src: "/images/logo-2.png" },
  { id: 3, name: "Fork & Spoon", src: "/images/logo-3.png" },
  { id: 4, name: "Wolf Coffee", src: "/images/logo-4.png" },
  { id: 5, name: "Bistro", src: "/images/logo-5.png" },
  { id: 6, name: "Bakery Slogan", src: "/images/logo-6.png" },
];

export default function Connection() {
  return (
    <section className="py-20 px-6 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-[#BC9A6C] font-serif italic text-lg block mb-2">
            Partners & Clients
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
            We work with the best pepole
          </h2>
        </div>

        {/* Partners/Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="relative w-32 h-20 md:w-40 md:h-24 grayscale transition-all duration-300 hover:scale-110"
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