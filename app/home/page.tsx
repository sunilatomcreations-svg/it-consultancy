import Image from "next/image";
import RipplePanels from "@/components/Home_banner1";
import HeroText from "@/components/HeroText";
import PartnershipText from "@/components/PartnershipText";
import OurServices from "@/components/OurServices";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import WhoWeAre from "@/components/WhoWeAre";
import ClientTestimonials from "@/components/ClientTestimonials";
import WhoWeAreBanner from "@/components/WhoWeAreBanner";
import { ServiceProvider } from "@/contexts/ServiceContext";


export default function Home() {
  return (
    <ServiceProvider>
      <main className="min-h-screen bg-[#F6F1EB] overflow-x-hidden">
        <Header />
        
        {/* Hero Section */}
        <RipplePanels />
        
        {/* Hero Text */}
        <HeroText />

        
        {/* Who We Are Section */}
        <WhoWeAre />


        {/* Partnership Text Section */}
        <PartnershipText />

        {/* Our Services Section */}
        <OurServices />

        {/* Industries Section */}
        <Industries />

        {/* Client Testimonials Section */}
        <ClientTestimonials />

        {/* FAQ Section */}
        <FAQ />

      

        {/* Footer */}
        <Footer />
      </main>
    </ServiceProvider>
  );
}