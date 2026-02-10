import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import CoffeeCategory from '../components/CoffeeCategory';
import WhyChooseUs from '../components/WhyChooseUs'; 
import OurFavoritesMenu from '../components/OurFavoritesMenu';
import MeetOurChef from '../components/MeetOurChef';
import OurCustomerSay from '../components/OurCustomerSay';
import Blog from '../components/Blog';
import Connection from '../components/Connection';
import Footer from '../components/Footer';

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
        <WhyChooseUs />
        <OurFavoritesMenu />
        <MeetOurChef />
        <OurCustomerSay />
        <Blog />
        <Connection />
        <Footer />
      </div>
    </main>
  );
}