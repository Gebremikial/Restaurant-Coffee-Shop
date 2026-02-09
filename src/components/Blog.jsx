import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    date: "10 Feb, 2022",
    author: "Ataur",
    title: "Simple coffee Recipes for Next Spring !",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet cursus nec duis nec facilisis quis imperdiet venenatis. Platea at nunc consequat est dolor",
  },
  {
    id: 2,
    date: "10 Feb, 2022",
    author: "Ataur",
    title: "Italian famous pasta with meat and cheese",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet cursus nec duis nec facilisis quis imperdiet venenatis. Platea at nunc consequat est dolor",
  },
  {
    id: 3,
    date: "10 Feb, 2022",
    author: "Ataur",
    title: "Chocolate truffle cake with honey flavor truffle cake",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet cursus nec duis nec facilisis quis imperdiet venenatis. Platea at nunc consequat est dolor",
  }
];

export default function Blog() {
  const accentColor = "#BC9A6C";

  return (
    <section className="py-24 px-6 lg:px-24 bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-[#1a1a1a]">Latest News & Blog</h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="group flex flex-col border border-gray-100 p-4 transition-shadow hover:shadow-xl">
            {/* Image Container - Using img-19.png for all */}
            <div className="relative aspect-[16/10] overflow-hidden mb-6">
              <Image
                src="/images/img-19.png"
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Meta Information (Date & Author) */}
            <div className="flex gap-6 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-[#BC9A6C]">📅</span>
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-[#BC9A6C]">👤</span>
                By {post.author}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl lg:text-2xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#BC9A6C] transition-colors leading-tight">
              {post.title}
            </h3>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
              {post.desc}
            </p>

            {/* Read More Link */}
            <button className="flex items-center gap-2 text-[#1a1a1a] font-bold text-sm border border-[#BC9A6C]/30 w-fit px-6 py-3 hover:bg-[#BC9A6C] hover:text-white transition-all">
              Read More 
              <span className="text-lg">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}