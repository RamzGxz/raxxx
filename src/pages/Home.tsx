import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutSection from "../sections/AboutSection";
import HeroSection from "../sections/HeroSection";
import PricingSection from "../sections/PricingSection";


const Home = () => {

  return (
    <div>
      <div className={`py-6 fixed top-0 mx-auto bg-primary w-full z-[999999999999999] `}>
        <Navbar />
      </div>
      <div className='w-full flex flex-col mx-auto lg:px-0 px-6 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm z-[999999999999999]'>
        <HeroSection />
        <AboutSection />
        <PricingSection/>
        <Footer/>
      </div>
    </div>

  );
};

export default Home;