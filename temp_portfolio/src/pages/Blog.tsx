import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, User, ArrowRight, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = ["All", "Cloud", "Security", "AI & ML", "DevOps", "Industry News"];

const featuredPost = {
  id: 1,
  slug: "future-of-enterprise-ai",
  title: "The Future of Enterprise AI: Trends Shaping 2024 and Beyond",
  excerpt: "Explore the transformative AI technologies that are revolutionizing how businesses operate, from generative AI to autonomous systems.",
  author: "Dr. Sarah Chen",
  role: "Chief Technology Officer",
  date: "Dec 8, 2024",
  readTime: "8 min read",
  category: "AI & ML",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
};

const posts = [
  {
    id: 2,
    slug: "zero-trust-architecture-guide",
    title: "Zero Trust Architecture: A Complete Implementation Guide",
    excerpt: "Learn how to implement zero trust security principles to protect your organization from modern cyber threats.",
    author: "James Miller",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
  },
  {
    id: 3,
    slug: "kubernetes-best-practices",
    title: "Kubernetes Best Practices for Production Workloads",
    excerpt: "Essential strategies for running reliable, scalable, and secure containerized applications in production.",
    author: "Alex Thompson",
    date: "Dec 3, 2024",
    readTime: "10 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80",
  },
  {
    id: 4,
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Optimization: Saving 40% on Your AWS Bill",
    excerpt: "Practical techniques and tools to reduce cloud spending without sacrificing performance or reliability.",
    author: "Emily Rodriguez",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  },
  {
    id: 5,
    slug: "data-pipelines-apache-kafka",
    title: "Building Scalable Data Pipelines with Apache Kafka",
    excerpt: "A deep dive into designing event-driven architectures that handle millions of events per second.",
    author: "Michael Chang",
    date: "Nov 25, 2024",
    readTime: "12 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80",
  },
  {
    id: 6,
    slug: "edge-computing-iot",
    title: "The Rise of Edge Computing in IoT Applications",
    excerpt: "How edge computing is transforming IoT deployments with faster processing and reduced latency.",
    author: "Lisa Park",
    date: "Nov 20, 2024",
    readTime: "5 min read",
    category: "Industry News",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 7,
    slug: "mlops-production",
    title: "MLOps: Bridging the Gap Between Data Science and Production",
    excerpt: "Best practices for deploying, monitoring, and maintaining machine learning models at scale.",
    author: "Dr. Sarah Chen",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
  },
];

const trendingTopics = [
  "Generative AI",
  "Cloud Migration",
  "Cybersecurity",
  "DevOps",
  "Machine Learning",
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-16 pb-16 gradient-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block animate-fade-in">
              Our Blog
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Insights &{" "}
              <span className="gradient-text">Innovation</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Stay ahead with expert insights on technology trends, best practices, and industry innovations.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 rounded-full border-border/50 bg-card/80 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-6 border-b border-border bg-secondary/30">
        <div className="container-custom">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-muted-foreground flex-shrink-0">
              <TrendingUp size={16} />
              <span className="text-sm font-medium">Trending:</span>
            </div>
            {trendingTopics.map((topic) => (
              <Button
                key={topic}
                variant="ghost"
                size="sm"
                className="rounded-full whitespace-nowrap text-muted-foreground hover:text-accent"
              >
                #{topic}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container-custom">
          <Link to={`/blog/${featuredPost.slug}`} className="glass-card rounded-3xl overflow-hidden animate-fade-in block group">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-video lg:aspect-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 rounded-full gradient-cta text-accent-foreground text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center">
                      <User size={18} className="text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{featuredPost.author}</div>
                      <div className="text-xs text-muted-foreground">{featuredPost.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{featuredPost.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
                <span className="gradient-cta text-accent-foreground font-semibold rounded-full w-fit px-6 py-2 inline-flex items-center group-hover:opacity-90">
                  Read Article
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="container-custom">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
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

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.id}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer animate-fade-in block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <User size={14} className="text-secondary-foreground" />
                      </div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full font-semibold px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 gradient-cta">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8">
              Subscribe to our newsletter for the latest insights and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-full bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60"
              />
              <Button variant="secondary" className="rounded-full font-semibold px-8">
              Subscribe
            </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
