import Image from 'next/image';

const chefs = [
  { id: 14, name: "Bulbul Hassan", role: "Chef" },
  { id: 15, name: "Jorina Begum", role: "Founder" },
  { id: 16, name: "M.Mohammad Nur", role: "Specialist" }, // Note: Fixed 'Seacialist' typo from screenshot
  { id: 17, name: "Munna Kathy", role: "Owner" },
];

export default function MeetOurChef() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-[#1a1a1a]">Meet our chef</h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue
        </p>
      </div>

      {/* Chefs Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {chefs.map((chef) => (
          <div key={chef.id} className="group flex flex-col items-center">
            {/* Image Container */}
            <div className="relative w-full aspect-square overflow-hidden rounded-sm mb-6 shadow-md">
              <Image
                src={`/images/img-${chef.id}.png`} // Updated to .png
                alt={chef.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Social Media Overlay (Matching Jorina's card in screenshot) */}
              {chef.id === 15 && (
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                  {['f', 't', 'v', 'p'].map((social) => (
                    <div 
                      key={social} 
                      className="w-8 h-8 bg-white flex items-center justify-center shadow-sm text-[#BC9A6C] font-bold text-xs rounded-sm cursor-pointer hover:bg-[#BC9A6C] hover:text-white transition-colors"
                    >
                      {social.toUpperCase()}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Chef Info */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">
                {chef.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {chef.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}