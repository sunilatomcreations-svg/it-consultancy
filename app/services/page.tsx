import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OurServices from '@/components/OurServices';
import FAQ from '@/components/FAQ';
import ServicesTop from '@/components/Servicestop';
import ServiceTestimonial from '@/components/ServiceTestimonial';
import Servicesdetails from '@/components/Servicesdetails';
import { ServiceProvider } from '@/contexts/ServiceContext';

const ServicesPage = () => {
  return (
    <ServiceProvider>
      <main className="min-h-screen bg-[#F6F1EB]">
        <Header />

        <div style={{ paddingTop: '70px' }}>
          <ServicesTop />
        </div>
        
        {/* Services Section */}
        <OurServices />
        <Servicesdetails />

        {/* Service Testimonials Section */}
        <ServiceTestimonial />
        <Servicesdetails />

        {/* Service Testimonials Section */}
        <ServiceTestimonial />
        <Servicesdetails />

        {/* Service Testimonials Section */}
        <ServiceTestimonial />
        
        {/* FAQ Section */}
        <FAQ />
        
        <Footer />
      </main>
    </ServiceProvider>
  );
};

export default ServicesPage;