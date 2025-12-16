import React, { Suspense } from 'react';
import Header from '@/components/Header';
import AIServicesHero from '@/components/AIServicesHero';
import Industries from '@/components/Industries';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import RipplePanels from '@/components/Home_banner1';
import Airippleapnnel from '@/components/airippleapnnel';

const AIPage = () => {
  return (
    <main className="min-h-screen bg-[#F6F1EB] overflow-x-hidden">
      <Header />
      
       <Airippleapnnel /> 
       
      
       <Suspense fallback={<div />}> 
         <AIServicesHero />
       </Suspense>
      

      <Industries/>
      <FAQ/>
      <Footer/>
    </main>
  );
};

export default AIPage;
