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
      <main className="min-h-screen bg-[#F6F1EB] overflow-x-hidden">
        <Header />

        <div style={{ paddingTop: '70px' }}>
          <ServicesTop />
        </div>

        {/* Services Section */}
        <OurServices />

        {/* AI Development Services */}
        <Servicesdetails serviceName="AI Development Services" />
        <ServiceTestimonial />

        {/* App Development */}
        <Servicesdetails serviceName="App Development" />
        <ServiceTestimonial />

        {/* Software Development */}
        <Servicesdetails serviceName="Software Development" />
        <ServiceTestimonial />

        {/* Digital Transformation */}
        <Servicesdetails serviceName="Digital Transformation" />
        <ServiceTestimonial />

        {/* Ideation and Design Strategy */}
        <Servicesdetails serviceName="Ideation and Design Strategy" />
        <ServiceTestimonial />

        {/* IT Consultancy */}
        <Servicesdetails serviceName="IT Consultancy" />
        <ServiceTestimonial />

        {/* DevOps */}
        <Servicesdetails serviceName="DevOps" />
        <ServiceTestimonial />

        {/* Cloud Managed Services */}
        <Servicesdetails serviceName="Cloud Managed Services" />
        <ServiceTestimonial />

        {/* Web Development */}
        <Servicesdetails serviceName="Web Development" />
        <ServiceTestimonial />

        {/* Cybersecurity Solutions */}
        <Servicesdetails serviceName="Cybersecurity Solutions" />
        <ServiceTestimonial />

        {/* Data Analytics */}
        <Servicesdetails serviceName="Data Analytics" />
        <ServiceTestimonial />

        {/* Digital Marketing */}
        <Servicesdetails serviceName="Digital Marketing" />
        <ServiceTestimonial />

        {/* UI/UX Design */}
        <Servicesdetails serviceName="UI/UX Design" />
        <ServiceTestimonial />

        {/* Blockchain Development */}
        <Servicesdetails serviceName="Blockchain Development" />
        <ServiceTestimonial />

        {/* Quality Assurance & Testing */}
        <Servicesdetails serviceName="Quality Assurance & Testing" />
        <ServiceTestimonial />

        {/* E-commerce Solutions */}
        <Servicesdetails serviceName="E-commerce Solutions" />
        <ServiceTestimonial />

        {/* FAQ Section */}
        <FAQ />

        <Footer />
      </main>
    </ServiceProvider>
  );
};

export default ServicesPage;