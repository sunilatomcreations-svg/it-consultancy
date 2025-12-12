 'use client';

import { motion } from 'framer-motion';
import BlogCard from './BlogCard';

const samplePosts = [
  {
    image: 'https://img.icons8.com/fluency/400/cloud.png',
    tag: 'Cloud',
    title: 'Cloud Migration Strategies for Modern Businesses',
    summary: 'Learn how to successfully migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.',
    author: 'Sarah Chen',
  },
  {
    image: 'https://img.icons8.com/fluency/400/artificial-intelligence.png',
    tag: 'AI',
    title: 'AI-Powered Automation: Transforming Business Operations',
    summary: 'Discover how artificial intelligence is revolutionizing workflow automation and decision-making processes.',
    author: 'Michael Rodriguez',
  },
  {
    image: 'https://img.icons8.com/fluency/400/devops.png',
    tag: 'DevOps',
    title: 'DevOps Best Practices for Scalable Applications',
    summary: 'Implement proven DevOps methodologies to accelerate development cycles and improve software quality.',
    author: 'Emma Thompson',
  },
  {
    image: 'https://img.icons8.com/fluency/400/cyber-security.png',
    tag: 'Cybersecurity',
    title: 'Advanced Cybersecurity Threats and Defense Strategies',
    summary: 'Stay ahead of evolving cyber threats with comprehensive security frameworks and proactive defense measures.',
    author: 'David Kim',
  },
  {
    image: 'https://img.icons8.com/fluency/400/data-configuration.png',
    tag: 'Data Analytics',
    title: 'Leveraging Big Data for Business Intelligence',
    summary: 'Transform raw data into actionable insights with advanced analytics and machine learning techniques.',
    author: 'Lisa Wang',
  },
  {
    image: 'https://img.icons8.com/fluency/400/strategy.png',
    tag: 'Digital Transformation',
    title: 'Digital Transformation: A Complete Guide for Enterprises',
    summary: 'Navigate the digital landscape with strategic transformation initiatives that drive innovation and growth.',
    author: 'James Mitchell',
  },
  {
    image: 'https://img.icons8.com/fluency/400/internet-of-things.png',
    tag: 'IoT',
    title: 'Internet of Things: Connecting the Physical and Digital Worlds',
    summary: 'Explore IoT implementations that enhance operational efficiency and create new business opportunities.',
    author: 'Anna Petrov',
  },
];

export default function BlogGrid() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section className="mt-12 px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Latest Blogs</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {samplePosts.map((post, idx) => (
          <motion.div key={idx} variants={item}>
            <BlogCard
              image={post.image}
              tag={post.tag}
              title={post.title}
              summary={post.summary}
              author={post.author}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}