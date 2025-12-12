import BlogCard from './BlogCard';

const samplePosts = [
  {
    image: 'https://img.icons8.com/fluency/400/cloud.png',
    tag: 'Cloud',
    title: 'Understanding Cloud Architecture',
    summary: 'Explore modern cloud architectures and best practices for scalability.',
    author: 'Jane Doe',
  },
  {
    image: 'https://img.icons8.com/fluency/400/artificial-intelligence.png',
    tag: 'AI',
    title: 'AI in Modern Business',
    summary: 'How artificial intelligence is transforming industries.',
    author: 'John Smith',
  },
  {
    image: 'https://img.icons8.com/fluency/400/cyber-security.png',
    tag: 'Cybersecurity',
    title: 'Securing Your Digital Assets',
    summary: 'Essential cybersecurity practices for businesses.',
    author: 'Alice Johnson',
  },
  {
    image: 'https://img.icons8.com/fluency/400/devops.png',
    tag: 'DevOps',
    title: 'DevOps Best Practices',
    summary: 'Streamlining development and operations.',
    author: 'Bob Wilson',
  },
  {
    image: 'https://img.icons8.com/fluency/400/agile.png',
    tag: 'Agile',
    title: 'Agile Methodology Explained',
    summary: 'Implementing agile in your projects.',
    author: 'Carol Brown',
  },
  {
    image: 'https://img.icons8.com/fluency/400/cloud.png',
    tag: 'Cloud',
    title: 'Cloud Migration Strategies',
    summary: 'Planning your move to the cloud.',
    author: 'David Lee',
  },
  {
    image: 'https://img.icons8.com/fluency/400/artificial-intelligence.png',
    tag: 'AI',
    title: 'Machine Learning Fundamentals',
    summary: 'Getting started with ML.',
    author: 'Eva Garcia',
  },
];

export default function BlogGrid() {
  return (
    <section className="mt-12 px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePosts.map((post, idx) => (
          <BlogCard 
            key={idx}
            image={post.image}
            tag={post.tag}
            title={post.title}
            summary={post.summary}
            author={post.author}
          />
        ))}
      </div>
    </section>
  );
}