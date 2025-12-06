import React from 'react';
import Header from '@/components/Header';
import AIServicesHero from '@/components/AIServicesHero';
import Industries from '@/components/Industries';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

const AIPage = () => {
  return (
    <main className="min-h-screen bg-[#F6F1EB]">
      <Header />
      
      <div style={{ paddingTop: '70px' }}>
        <AIServicesHero />
      </div>

      <Industries/>
      <FAQ/>
      <Footer/>
    </main>
  );
};

export default AIPage;
