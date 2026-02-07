import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FoodCategory from '../components/FoodCategory';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-coffee-beans">
      {/* This overlay ensures the background pattern doesn't make text hard to read */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FoodCategory />
      </div>
    </main>
  );
}