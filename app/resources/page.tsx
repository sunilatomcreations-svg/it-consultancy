'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
  avatar: "https://i.pravatar.cc/40?img=1",
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
    avatar: "https://i.pravatar.cc/32?img=2",
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
    avatar: "https://i.pravatar.cc/32?img=3",
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
    avatar: "https://i.pravatar.cc/32?img=4",
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
    avatar: "https://i.pravatar.cc/32?img=5",
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
    avatar: "https://i.pravatar.cc/32?img=6",
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
    avatar: "https://i.pravatar.cc/32?img=7",
  },
];

const trendingTopics = [
  "Generative AI",
  "Cloud Migration",
  "Cybersecurity",
  "DevOps",
  "Machine Learning",
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F6F1EB] pt-15">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 pb-16 bg-[#F6F1EB] ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
         
            <motion.h1
              className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Insights &{" "}
              <span className="bg-gradient-to-r from-[#F97316] to-orange-600 bg-clip-text text-transparent">Innovation</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stay ahead with expert insights on technology trends, best practices, and industry innovations.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="relative max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-6 border-b border-gray-200 bg-gray-50/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-gray-500 flex-shrink-0">
              <span>📈</span>
              <span className="text-sm font-medium">Trending:</span>
            </div>
            {trendingTopics.map((topic) => (
              <button
                key={topic}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm"
              >
                #{topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white rounded-3xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-video lg:aspect-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 rounded-full bg-[#F97316] text-white text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-[#F97316] font-semibold text-sm tracking-wider uppercase mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <img
                      src={featuredPost.avatar}
                      alt={featuredPost.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-sm">{featuredPost.author}</div>
                      <div className="text-xs text-gray-500">{featuredPost.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{featuredPost.date}</span>
                    <span className="flex items-center gap-1">
                      <span>🕒</span>
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.slug}`} className="bg-[#F97316] text-white font-semibold rounded-full w-fit px-6 py-2 inline-flex items-center hover:opacity-90 transition-opacity">
                  Read Article
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 border-b border-gray-200  top-16 bg-white/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 ">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors hover:cursor-pointer ${
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

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-[#F97316] uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <span>🕒</span>
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-[#F97316] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.avatar}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
         
        </div>
      </section>

      {/* Newsletter Section */}
 

      <Footer />
    </div>
  );
}
