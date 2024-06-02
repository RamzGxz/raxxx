import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutSection from "../sections/AboutSection";
import HeroSection from "../sections/HeroSection";
import PricingSection from "../sections/PricingSection";


const Home = () => {

  return (
    <div>
      <div className={`py-6 fixed top-0 mx-auto bg-primary w-full`}>
        <Navbar />
      </div>
      <div className='w-full flex flex-col max-w-screen-xl mx-auto lg:px-0 px-6'>
        <HeroSection />
        <AboutSection />
        <PricingSection/>
        <Footer/>
      </div>
    </div>

  );
};

export default Home;