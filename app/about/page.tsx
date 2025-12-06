import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import FAQ from '@/components/FAQ';
import Gallery from '@/components/Gallery';
import HeroText from '@/components/HeroText';
import ClientTestimonials from '@/components/ClientTestimonials';
import PartnershipText from '@/components/PartnershipText';
import WhoWeAreBanner from '@/components/WhoWeAreBanner';

export default function About() {
  return (
    <main className="min-h-screen bg-[#F6F1EB]">
      <Header />

        <section className="mt-18">
     
        <WhoWeAreBanner />
        </section>
  

        <section className="pt-10 mb-5">
           <div className="max-w-7xl mx-auto">
           <PartnershipText/>
           </div>
        </section>

      {/* Team Section */}
      <section className="py-2 px-4">
        <div className="max-w-9xl mx-auto">
            <ClientTestimonials/>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-2 px-4" style={{ backgroundColor: '#F6F1EB' }}>
        <div className="max-w-7xl mx-auto">
            <HeroText/>
            
        </div>
      </section>
            <section className="py-5 px-4" style={{ backgroundColor: '#F6F1EB' }}>
        <div className="max-w-9xl mx-auto">
            <Gallery/>
         
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F6F1EB' }}>
        <div className="max-w-9xl mx-auto text-center">

            <FAQ/>
        </div>
      </section>

      <Footer />
    </main>
  );
}