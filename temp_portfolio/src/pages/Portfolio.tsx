import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block animate-fade-in">
              Our Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Transforming Ideas into{" "}
              <span className="gradient-text">Digital Reality</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Explore our collection of successful projects that have helped businesses achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="container-custom">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter size={18} className="text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full whitespace-nowrap ${
                  activeCategory === category ? "gradient-cta text-accent-foreground" : ""
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                to={`/portfolio/${project.slug}`}
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer animate-fade-in block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-4 text-primary-foreground">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="font-display font-bold text-xl">{value}</div>
                          <div className="text-xs uppercase opacity-80">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-cta">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Button size="lg" variant="secondary" className="font-semibold px-8 rounded-full">
            Get in Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
