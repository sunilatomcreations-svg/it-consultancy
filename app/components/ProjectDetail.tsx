import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Building, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    slug: "enterprise-cloud-migration",
    title: "Enterprise Cloud Migration",
    category: "Cloud",
    client: "Fortune 500 Financial Corp",
    description: "Migrated legacy infrastructure to AWS, reducing costs by 40% and improving uptime to 99.99%.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    tags: ["AWS", "Kubernetes", "Terraform"],
    metrics: { savings: "40%", uptime: "99.99%" },
    duration: "8 months",
    year: "2024",
    challenge: "The client was running critical financial applications on aging on-premise infrastructure with frequent downtime incidents affecting millions of customers. The legacy systems were expensive to maintain and couldn't scale to meet growing demand.",
    solution: "We designed and implemented a comprehensive cloud migration strategy using AWS services. This included containerizing applications with Kubernetes, implementing Infrastructure as Code with Terraform, and setting up automated CI/CD pipelines for seamless deployments.",
    results: [
      "Reduced infrastructure costs by 40% through right-sizing and reserved instances",
      "Achieved 99.99% uptime SLA with multi-AZ deployment",
      "Decreased deployment time from days to minutes",
      "Implemented auto-scaling to handle 10x traffic spikes",
      "Enhanced security posture with AWS security services",
    ],
    technologies: ["AWS EC2", "EKS", "RDS", "S3", "CloudFront", "Terraform", "GitHub Actions", "Prometheus", "Grafana"],
  },
  {
    id: 2,
    slug: "ai-powered-customer-service",
    title: "AI-Powered Customer Service",
    category: "AI/ML",
    client: "Global Retail Chain",
    description: "Implemented NLP chatbot handling 70% of customer queries autonomously with 95% satisfaction rate.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    tags: ["OpenAI", "Python", "React"],
    metrics: { automation: "70%", satisfaction: "95%" },
    duration: "6 months",
    year: "2024",
    challenge: "Customer support teams were overwhelmed with repetitive queries, leading to long wait times and decreased customer satisfaction. The company needed a scalable solution to handle growing customer demand.",
    solution: "We developed an intelligent conversational AI system using GPT-4 and custom fine-tuned models. The solution includes sentiment analysis, intent classification, and seamless handoff to human agents when needed.",
    results: [
      "70% of customer queries resolved automatically",
      "95% customer satisfaction score",
      "Average response time reduced from 4 hours to 30 seconds",
      "Support team capacity increased by 300%",
      "24/7 multilingual support coverage",
    ],
    technologies: ["OpenAI GPT-4", "LangChain", "Python", "FastAPI", "React", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: 3,
    slug: "zero-trust-security-framework",
    title: "Zero Trust Security Framework",
    category: "Security",
    client: "Healthcare Provider Network",
    description: "Designed and deployed comprehensive security architecture protecting 2M+ patient records.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    tags: ["Zero Trust", "HIPAA", "IAM"],
    metrics: { records: "2M+", compliance: "100%" },
    duration: "12 months",
    year: "2023",
    challenge: "The healthcare network needed to modernize its security infrastructure to protect sensitive patient data while maintaining HIPAA compliance. Legacy perimeter-based security was insufficient against modern threats.",
    solution: "We implemented a comprehensive Zero Trust Architecture with identity-based access controls, micro-segmentation, continuous verification, and advanced threat detection across all network endpoints.",
    results: [
      "100% HIPAA compliance achieved",
      "Zero security breaches since implementation",
      "2M+ patient records protected",
      "Reduced attack surface by 80%",
      "Automated security incident response",
    ],
    technologies: ["Okta", "CrowdStrike", "Zscaler", "Microsoft Defender", "Splunk", "HashiCorp Vault", "Palo Alto Networks"],
  },
  {
    id: 4,
    slug: "ecommerce-platform-rebuild",
    title: "E-Commerce Platform Rebuild",
    category: "Web Apps",
    client: "Fashion Retailer",
    description: "Modern headless commerce platform with 3x faster load times and 150% increase in conversions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    tags: ["Next.js", "Shopify", "Vercel"],
    metrics: { speed: "3x", conversions: "+150%" },
    duration: "5 months",
    year: "2024",
    challenge: "The existing e-commerce platform was slow, difficult to maintain, and couldn't support the brand's growth ambitions. Mobile experience was particularly poor with high bounce rates.",
    solution: "We rebuilt the entire platform using a headless architecture with Next.js frontend, Shopify backend, and optimized CDN delivery. Focus on performance, SEO, and exceptional user experience.",
    results: [
      "Page load time reduced by 3x",
      "Conversion rate increased by 150%",
      "Mobile bounce rate decreased by 60%",
      "SEO rankings improved significantly",
      "Achieved 95+ Lighthouse scores",
    ],
    technologies: ["Next.js 14", "Shopify Storefront API", "Vercel", "Tailwind CSS", "Sanity CMS", "Stripe", "Algolia"],
  },
  {
    id: 5,
    slug: "iot-fleet-management",
    title: "IoT Fleet Management System",
    category: "Mobile",
    client: "Logistics Company",
    description: "Real-time tracking and analytics for 5,000+ vehicles with predictive maintenance alerts.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    tags: ["React Native", "IoT", "MongoDB"],
    metrics: { vehicles: "5,000+", efficiency: "+35%" },
    duration: "10 months",
    year: "2023",
    challenge: "Managing a large fleet without real-time visibility led to inefficiencies, unexpected breakdowns, and poor route optimization. The client needed a comprehensive solution for fleet monitoring and management.",
    solution: "We developed a complete IoT platform with GPS tracking, telematics data processing, mobile apps for drivers, and an admin dashboard with real-time analytics and predictive maintenance capabilities.",
    results: [
      "Real-time tracking of 5,000+ vehicles",
      "Fuel efficiency improved by 35%",
      "Maintenance costs reduced by 25%",
      "Route optimization saved 20% in delivery time",
      "Driver safety incidents reduced by 40%",
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Apache Kafka", "TimescaleDB", "AWS IoT", "TensorFlow"],
  },
  {
    id: 6,
    slug: "data-lake-architecture",
    title: "Data Lake Architecture",
    category: "Cloud",
    client: "Media Conglomerate",
    description: "Unified data platform processing 50TB daily with real-time analytics and ML pipelines.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80",
    tags: ["Snowflake", "Spark", "Airflow"],
    metrics: { data: "50TB/day", insights: "Real-time" },
    duration: "14 months",
    year: "2024",
    challenge: "Data was siloed across multiple systems making it impossible to get unified insights. Analytics queries took hours and couldn't support real-time decision making for content recommendations.",
    solution: "We architected a modern data lakehouse combining the best of data lakes and data warehouses. Implemented real-time streaming pipelines, ML feature stores, and self-service analytics tools.",
    results: [
      "Processing 50TB of data daily",
      "Query times reduced from hours to seconds",
      "Real-time content recommendations enabled",
      "Data democratization across 500+ users",
      "ML model training time reduced by 80%",
    ],
    technologies: ["Snowflake", "Apache Spark", "Airflow", "dbt", "Fivetran", "Looker", "MLflow", "Delta Lake"],
  },
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolio">
            <Button className="gradient-cta text-accent-foreground rounded-full">
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container-custom pt-8">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
          <ArrowLeft size={18} />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
                {project.category}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {project.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Building size={18} className="text-accent" />
                  <span className="text-sm">{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-accent" />
                  <span className="text-sm">{project.year} • {project.duration}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics Card */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold mb-6">Key Results</h3>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-4 rounded-xl bg-secondary/50">
                    <div className="font-display text-3xl font-bold gradient-text mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-muted-foreground capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="pb-12">
        <div className="container-custom">
          <div className="rounded-3xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Results Achieved</h2>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="glass-card rounded-2xl p-6 sticky top-8">
                <h3 className="font-display text-lg font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="border-t border-border mt-6 pt-6">
                  <h3 className="font-display text-lg font-semibold mb-4">Start Your Project</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in similar solutions for your business?
                  </p>
                  <Button className="w-full gradient-cta text-accent-foreground rounded-full">
                    Contact Us
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
