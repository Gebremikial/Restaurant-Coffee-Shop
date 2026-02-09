import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    date: "10 Feb, 2022",
    author: "Ataur",
    title: "Simple coffee Recipes for Next Spring !",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet cursus nec duis nec facilisis quis imperdiet venenatis.",
  },
  {
    id: 2,
    date: "10 Feb, 2022",
    author: "Ataur",
    title: "Italian famous pasta with meat and cheese",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet cursus nec duis nec facilisis quis imperdiet venenatis.",
  },
  {
    id: 3,
    date: "10 Feb, 2022",
    author: "Ataur",
    title: "Chocolate truffle cake with honey flavor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet cursus nec duis nec facilisis quis imperdiet venenatis.",
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 lg:py-20 px-6 lg:px-20 bg-white overflow-hidden">
      {/* Refined Header - matching smaller scale */}
      <div className="max-w-5xl mx-auto text-center mb-12">
         <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#BC9A6C] font-semibold tracking-[0.15em] uppercase text-[10px] lg:text-[11px]">
              Latest Blog
            </span>
            <div className="h-[1px] w-8 bg-[#BC9A6C]/70"></div>
          </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-[#1a1a1a]">Latest News & Blog</h2>
        <p className="text-gray-400 max-w-lg mx-auto text-[13px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue
        </p>
      </div>

      {/* Blog Grid - Reduced max-width to 6xl for centering */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="group flex flex-col border border-gray-100 p-4 transition-all hover:shadow-lg hover:border-transparent rounded-sm">
            {/* Image Container - Aspect ratio adjusted for a tighter look */}
            <div className="relative aspect-[16/11] overflow-hidden mb-5">
              <Image
                src="/images/img-19.png"
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Meta Information (Smaller icons/text) */}
            <div className="flex gap-4 mb-3">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <span className="text-[#BC9A6C]">📅</span>
                {post.date}
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <span className="text-[#BC9A6C]">👤</span>
                By {post.author}
              </div>
            </div>

            {/* Content - Titles scaled down, Desc made Bold & 13px */}
            <h3 className="text-lg lg:text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#BC9A6C] transition-colors leading-tight">
              {post.title}
            </h3>
            
            <p className="text-gray-500 text-[13px] font-bold leading-relaxed mb-6 flex-grow">
              {post.desc}
            </p>

            {/* Read More Link - Tightened padding */}
            <button className="flex items-center gap-2 text-[#1a1a1a] font-bold text-[12px] border border-[#BC9A6C]/40 w-fit px-5 py-2.5 hover:bg-[#BC9A6C] hover:text-white transition-all uppercase tracking-widest">
              Read More 
              <span className="text-sm">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}