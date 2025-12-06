"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tagline: string;
  features: string[];
}

interface ServiceContextType {
  selectedService: ServiceDetail | null;
  setSelectedService: (service: ServiceDetail) => void;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    // Return a default object if not within ServiceProvider
    return {
      selectedService: serviceDetails["Software Development"],
      setSelectedService: () => {} // No-op function
    };
  }
  return context;
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "AI Development Services": {
    id: "ai-development",
    title: "AI Development",
    subtitle: "Services",
    description: "We design and implement cutting-edge artificial intelligence solutions including machine learning models, natural language processing, computer vision, and intelligent automation systems that transform business operations and drive innovation.",
    tagline: "Revolutionizing business with intelligent automation",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision Solutions"]
  },
  "App Development": {
    id: "app-development",
    title: "Mobile App",
    subtitle: "Development", 
    description: "We create innovative mobile applications for iOS and Android platforms, delivering seamless user experiences with native performance, intuitive design, and robust backend integration for modern businesses.",
    tagline: "Building mobile experiences that engage and convert",
    features: ["Native iOS Development", "Android App Development", "Cross-Platform Solutions"]
  },
  "Software Development": {
    id: "software-development",
    title: "Software",
    subtitle: "Development",
    description: "We deliver comprehensive software development services, from strategic technology planning to implementation and ongoing support, helping businesses achieve digital transformation and operational excellence.",
    tagline: "Exceeding expectations by surpassing benchmarks",
    features: ["ERP Software Development", "Custom CRM Development", "IoT Development"]
  },
  "Digital Transformation": {
    id: "digital-transformation",
    title: "Digital",
    subtitle: "Transformation",
    description: "We guide organizations through comprehensive digital transformation journeys, modernizing legacy systems, optimizing workflows, and implementing innovative technologies to enhance operational efficiency and customer experience.",
    tagline: "Transforming businesses for the digital age",
    features: ["Legacy System Modernization", "Process Automation", "Digital Strategy Consulting"]
  },
  "Ideation and Design Strategy": {
    id: "design-strategy",
    title: "Design",
    subtitle: "Strategy",
    description: "We provide strategic design consultation and innovative ideation services, crafting user-centered design solutions that align with business objectives and create compelling digital experiences across all touchpoints.",
    tagline: "Designing tomorrow's digital experiences today",
    features: ["UX/UI Design Strategy", "Design System Creation", "User Research & Testing"]
  },
  "IT Consultancy": {
    id: "it-consultancy",
    title: "IT",
    subtitle: "Consultancy",
    description: "We offer strategic IT consulting services to help organizations optimize their technology infrastructure, improve security posture, and align technology investments with business objectives for sustainable growth.",
    tagline: "Strategic technology guidance for business success",
    features: ["Technology Assessment", "IT Strategy Planning", "Infrastructure Optimization"]
  },
  "DevOps": {
    id: "devops",
    title: "DevOps",
    subtitle: "Solutions",
    description: "We implement comprehensive DevOps practices and automation pipelines that accelerate software delivery, improve collaboration between development and operations teams, and ensure reliable, scalable deployment processes.",
    tagline: "Accelerating delivery through automation excellence",
    features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Monitoring & Analytics"]
  },
  "Cloud Managed Services": {
    id: "cloud-services",
    title: "Cloud",
    subtitle: "Services",
    description: "We provide end-to-end cloud management services including migration, optimization, monitoring, and ongoing support across AWS, Azure, and Google Cloud platforms to ensure scalable, secure, and cost-effective cloud operations.",
    tagline: "Optimizing your cloud journey for maximum efficiency",
    features: ["Cloud Migration Services", "24/7 Cloud Monitoring", "Cost Optimization"]
  },
  "Web Development": {
    id: "web-development",
    title: "Web",
    subtitle: "Development",
    description: "We build modern, responsive web applications using cutting-edge technologies, focusing on performance, scalability, and user experience to deliver digital solutions that drive business growth and engagement.",
    tagline: "Crafting digital experiences that perform",
    features: ["React/Next.js Development", "E-commerce Solutions", "Progressive Web Apps"]
  },
  "Cybersecurity Solutions": {
    id: "cybersecurity",
    title: "Cybersecurity",
    subtitle: "Solutions",
    description: "We provide comprehensive cybersecurity services including threat assessment, security implementation, compliance consulting, and ongoing monitoring to protect your digital assets and maintain business continuity.",
    tagline: "Securing your digital future with confidence",
    features: ["Security Audits", "Threat Detection", "Compliance Management"]
  },
  "Data Analytics": {
    id: "data-analytics",
    title: "Data",
    subtitle: "Analytics",
    description: "We transform raw data into actionable insights through advanced analytics, business intelligence solutions, and data visualization platforms that empower data-driven decision making across your organization.",
    tagline: "Turning data into strategic advantages",
    features: ["Business Intelligence", "Data Visualization", "Predictive Analytics"]
  },
  "Digital Marketing": {
    id: "digital-marketing",
    title: "Digital",
    subtitle: "Marketing",
    description: "We develop comprehensive digital marketing strategies leveraging SEO, social media, content marketing, and paid advertising to increase brand visibility, drive qualified traffic, and maximize ROI.",
    tagline: "Amplifying your brand in the digital landscape",
    features: ["SEO Optimization", "Social Media Strategy", "Performance Marketing"]
  },
  "UI/UX Design": {
    id: "ui-ux-design",
    title: "UI/UX",
    subtitle: "Design",
    description: "We create intuitive, user-centered design solutions that enhance user experience and drive engagement through thoughtful interface design, user research, and iterative design processes.",
    tagline: "Designing interfaces that users love",
    features: ["User Experience Design", "Interface Design", "Prototyping & Testing"]
  },
  "Blockchain Development": {
    id: "blockchain",
    title: "Blockchain",
    subtitle: "Development",
    description: "We develop secure, transparent blockchain solutions including smart contracts, DeFi applications, and cryptocurrency platforms that leverage distributed ledger technology for enhanced security and transparency.",
    tagline: "Building the decentralized future",
    features: ["Smart Contract Development", "DeFi Solutions", "Cryptocurrency Platforms"]
  }
};

export const ServiceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(
    serviceDetails["Software Development"] // Default to Software Development
  );

  return (
    <ServiceContext.Provider value={{ selectedService, setSelectedService }}>
      {children}
    </ServiceContext.Provider>
  );
};