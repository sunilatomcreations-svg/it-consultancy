"use client"
import React from "react";
import Link from "next/link";

type Item = { title: string; desc?: string; href?: string; image?: string; avatar?: string; category?: string; date?: string; readTime?: string };

interface InsightsGridProps {
  variant?: 'portfolio' | 'resources';
}

const PORTFOLIO = {
  featured: {
    title: 'Enterprise Cloud Migration',
    desc: 'Migrated legacy infrastructure to AWS, reducing costs by 40% and improving uptime to 99.99%.',
    href: '/projects/enterprise-cloud-migration',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  items: [
    { title: 'Enterprise Cloud Migration', desc: 'Migrated legacy infrastructure to AWS, reducing costs by 40% and improving uptime to 99.99%.', href: '/projects/enterprise-cloud-migration', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', category: 'Cloud' },
    { title: 'AI-Powered Customer Service', desc: 'Implemented NLP chatbot handling 70% of customer queries autonomously with 95% satisfaction rate.', href: '/projects/ai-powered-customer-service', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', category: 'AI/ML' },
    { title: 'Zero Trust Security Framework', desc: 'Designed and deployed comprehensive security architecture protecting 2M+ patient records.', href: '/projects/zero-trust-security-framework', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80', category: 'Security' },
    { title: 'E-Commerce Platform Rebuild', desc: 'Modern headless commerce platform with 3x faster load times and 150% increase in conversions.', href: '/projects/ecommerce-platform-rebuild', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', category: 'Web Apps' },
    { title: 'IoT Fleet Management System', desc: 'Real-time tracking and analytics for 5,000+ vehicles with predictive maintenance alerts.', href: '/projects/iot-fleet-management', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', category: 'Mobile' },
    { title: 'Data Lake Architecture', desc: 'Unified data platform processing 50TB daily with real-time analytics and ML pipelines.', href: '/projects/data-lake-architecture', image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80', category: 'Cloud' },
  ] as Item[],
};

const RESOURCES = {
  featured: {
    title: 'The Future of Enterprise AI: Trends Shaping 2024 and Beyond',
    desc: 'Explore the transformative AI technologies that are revolutionizing how businesses operate, from generative AI to autonomous systems.',
    href: '/blog/future-of-enterprise-ai',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
  },
  items: [
    { title: 'Zero Trust Architecture: A Complete Implementation Guide', desc: 'Learn how to implement zero trust security principles to protect your organization from modern cyber threats.', href: '/blog/zero-trust-architecture-guide', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80', avatar: 'https://i.pravatar.cc/32?img=2', category: 'Security', date: 'Dec 5, 2024', readTime: '6 min read' },
    { title: 'Kubernetes Best Practices for Production Workloads', desc: 'Essential strategies for running reliable, scalable, and secure containerized applications in production.', href: '/blog/kubernetes-best-practices', image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80', avatar: 'https://i.pravatar.cc/32?img=3', category: 'DevOps', date: 'Dec 3, 2024', readTime: '10 min read' },
    { title: 'Cloud Cost Optimization: Saving 40% on Your AWS Bill', desc: 'Practical techniques and tools to reduce cloud spending without sacrificing performance or reliability.', href: '/blog/cloud-cost-optimization', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', avatar: 'https://i.pravatar.cc/32?img=4', category: 'Cloud', date: 'Nov 28, 2024', readTime: '7 min read' },
    { title: 'Building Scalable Data Pipelines with Apache Kafka', desc: 'A deep dive into designing event-driven architectures that handle millions of events per second.', href: '/blog/data-pipelines-apache-kafka', image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80', avatar: 'https://i.pravatar.cc/32?img=5', category: 'DevOps', date: 'Nov 25, 2024', readTime: '12 min read' },
    { title: 'The Rise of Edge Computing in IoT Applications', desc: 'How edge computing is transforming IoT deployments with faster processing and reduced latency.', href: '/blog/edge-computing-iot', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', avatar: 'https://i.pravatar.cc/32?img=6', category: 'Industry News', date: 'Nov 20, 2024', readTime: '5 min read' },
    { title: 'MLOps: Bridging the Gap Between Data Science and Production', desc: 'Best practices for deploying, monitoring, and maintaining machine learning models at scale.', href: '/blog/mlops-production', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80', avatar: 'https://i.pravatar.cc/32?img=7', category: 'AI & ML', date: 'Nov 15, 2024', readTime: '9 min read' },
  ] as Item[],
};

export default function InsightsGrid({ variant = 'portfolio' }: InsightsGridProps) {
  const data = variant === 'resources' ? RESOURCES : PORTFOLIO;
  const items = data.items;
  const featured = data.featured;
  return (
    <section className="w-full px-3 md:px-4 lg:px-6 py-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

          {/* Left: grid of cards (spans 2 cols) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {items.map((it, idx) => (
                <Link href={it.href || '#'} key={idx} className="block">
                  <article className="clip-card group flex items-start gap-2 p-1 md:p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow hover:bg-[#6B2259]">
                    <div className="w-16 h-12 md:w-20 md:h-14 overflow-hidden rounded-sm flex-shrink-0">
                      {it.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={it.image} alt={it.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gray-100" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-white">{it.title}</h4>
                      {it.category && <div className="text-[10px] text-[#F97316] mt-0.5 group-hover:text-white">{it.category}</div>}
                      <p className="mt-1 text-xs text-gray-700 leading-snug group-hover:text-white/90">{it.desc}</p>
                      <div className="mt-1">
                        <span className="text-xs text-[#F97316] underline group-hover:text-white">Read more</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: featured card */}
          <Link href={featured.href || '#'} className="block">
            <aside className="clip-card rounded-lg bg-[#6B2259] text-white p-3 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-sm font-semibold mb-2">{featured.title}</h3>

              <div className="rounded overflow-hidden flex-1 shadow-inner" style={{minHeight: 110}}>
                {featured.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-orange-500" />
                )}
              </div>

              <p className="mt-2 text-xs text-white/90">{featured.desc}</p>

              <div className="mt-2">
                <span className="text-xs underline text-white/95">Read more</span>
              </div>
            </aside>
          </Link>
        </div>
      </div>
    </section>
  );
}
