'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const categories = ["All", "Cloud", "Security", "AI/ML", "Web Apps", "Mobile"];

const projects = [
  {
    id: 1,
    slug: "enterprise-cloud-migration",
    title: "Enterprise Cloud Migration",
    category: "Cloud",
    client: "Fortune 500 Financial Corp",
    description: "Migrated legacy infrastructure to AWS, reducing costs by 40% and improving uptime to 99.99%.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["AWS", "Kubernetes", "Terraform"],
    metrics: { savings: "40%", uptime: "99.99%" },
  },
  {
    id: 2,
    slug: "ai-powered-customer-service",
    title: "AI-Powered Customer Service",
    category: "AI/ML",
    client: "Global Retail Chain",
    description: "Implemented NLP chatbot handling 70% of customer queries autonomously with 95% satisfaction rate.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["OpenAI", "Python", "React"],
    metrics: { automation: "70%", satisfaction: "95%" },
  },
  {
    id: 3,
    slug: "zero-trust-security-framework",
    title: "Zero Trust Security Framework",
    category: "Security",
    client: "Healthcare Provider Network",
    description: "Designed and deployed comprehensive security architecture protecting 2M+ patient records.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["Zero Trust", "HIPAA", "IAM"],
    metrics: { records: "2M+", compliance: "100%" },
  },
  {
    id: 4,
    slug: "ecommerce-platform-rebuild",
    title: "E-Commerce Platform Rebuild",
    category: "Web Apps",
    client: "Fashion Retailer",
    description: "Modern headless commerce platform with 3x faster load times and 150% increase in conversions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "Shopify", "Vercel"],
    metrics: { speed: "3x", conversions: "+150%" },
  },
  {
    id: 5,
    slug: "iot-fleet-management",
    title: "IoT Fleet Management System",
    category: "Mobile",
    client: "Logistics Company",
    description: "Real-time tracking and analytics for 5,000+ vehicles with predictive maintenance alerts.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["React Native", "IoT", "MongoDB"],
    metrics: { vehicles: "5,000+", efficiency: "+35%" },
  },
  {
    id: 6,
    slug: "data-lake-architecture",
    title: "Data Lake Architecture",
    category: "Cloud",
    client: "Media Conglomerate",
    description: "Unified data platform processing 50TB daily with real-time analytics and ML pipelines.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    tags: ["Snowflake", "Spark", "Airflow"],
    metrics: { data: "50TB/day", insights: "Real-time" },
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F6F1EB]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F6F1EB]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
           
            <motion.h1
              className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Transforming Ideas into{" "}
              <span className="bg-gradient-to-r from-[#F97316] to-orange-600 bg-clip-text text-transparent">Digital Reality</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our collection of successful projects that have helped businesses achieve their digital transformation goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-gray-200  top-16 bg-white/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="text-gray-500 flex-shrink-0 text-sm">Filter:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-[#F97316] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-4 text-white">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key}>
                            <div className="font-bold text-xl">{value}</div>
                            <div className="text-xs uppercase opacity-80">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-[#F97316] uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-gray-500 group-hover:text-[#F97316] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">→</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#F97316] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     

      <Footer />
    </div>
  );
}