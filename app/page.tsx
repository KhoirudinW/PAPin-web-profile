import HeroSection from "@/sections/landing/HeroSection"
import FeatureSection from "@/sections/landing/FeatureSection"
import AboutSection from "@/sections/landing/AboutSection"
import PricelistSection from "@/sections/landing/PricelistSection"
import FAQSection from "@/sections/landing/FAQSection"


export default function Home() {
  return (
    <div className='select-none relative'>
    
    <div className="flex flex-col">
      <HeroSection/>
      <AboutSection/>
      <FeatureSection/>
      <PricelistSection/>
      <FAQSection/>
    </div>
    
  </div>
  );
}
