import { Cloud, Shield, Cpu, Database, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure designed for growth. Migration, management, and optimization.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Intelligent automation solutions that streamline operations and boost productivity.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics platforms.",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "End-to-end digital strategy and implementation for modern enterprises.",
  },
  {
    icon: Zap,
    title: "IT Consulting",
    description: "Expert guidance to align technology with your business objectives and vision.",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive IT Solutions for{" "}
            <span className="gradient-text">Modern Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From cloud infrastructure to cybersecurity, we provide end-to-end technology services tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={24} className="text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
