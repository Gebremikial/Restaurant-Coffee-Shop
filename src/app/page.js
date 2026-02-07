import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import CoffeeCategory from '../components/CoffeeCategory';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'hsl(0, 0%, 100%)' }}>
      {/* Background pattern - only if img-15 exists */}
      <div className="bg-coffee-pattern" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutUs />
        <CoffeeCategory />
      </div>
    </main>
  );
}