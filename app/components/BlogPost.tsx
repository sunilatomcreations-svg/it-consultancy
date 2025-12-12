import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const allPosts = [
  {
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
    content: `
## Introduction

Artificial Intelligence has evolved from a futuristic concept to an essential business tool. In 2024, we're witnessing unprecedented adoption of AI technologies across every industry sector. This article explores the key trends that are shaping the future of enterprise AI.

## 1. Generative AI Goes Enterprise

The explosion of generative AI, led by models like GPT-4 and Claude, has fundamentally changed how businesses approach content creation, coding, and customer service. Enterprise adoption is accelerating as companies discover practical applications:

- **Code Generation**: AI assistants are now capable of writing production-quality code, reducing development time by up to 40%
- **Content Creation**: Marketing teams are leveraging AI for everything from ad copy to technical documentation
- **Customer Service**: Intelligent chatbots handle complex queries with near-human accuracy

## 2. AI-Powered Decision Intelligence

Decision intelligence platforms are combining AI with business analytics to provide actionable insights in real-time. Key capabilities include:

- Predictive analytics for demand forecasting
- Risk assessment and fraud detection
- Supply chain optimization
- Customer behavior prediction

## 3. Responsible AI and Governance

As AI adoption grows, so does the focus on responsible AI practices. Organizations are implementing:

- **AI Ethics Boards**: Cross-functional teams ensuring ethical AI deployment
- **Bias Detection**: Tools to identify and mitigate algorithmic bias
- **Explainability**: Making AI decisions transparent and understandable
- **Compliance Frameworks**: Meeting regulatory requirements like EU AI Act

## 4. Edge AI and Real-Time Processing

Moving AI processing to the edge enables real-time decision making without cloud latency. Applications include:

- Autonomous vehicles
- Industrial IoT monitoring
- Smart retail experiences
- Healthcare diagnostics

## 5. AI-Native Applications

A new generation of applications are being built with AI at their core, rather than as an add-on feature. These AI-native apps offer:

- Personalized user experiences
- Natural language interfaces
- Continuous learning and improvement
- Proactive assistance

## Conclusion

The future of enterprise AI is not just about technology—it's about transforming how businesses operate, compete, and serve their customers. Organizations that embrace these trends while maintaining responsible AI practices will be best positioned for success in the AI-powered economy.

The key to success lies in starting with clear business objectives, investing in the right talent and infrastructure, and maintaining a commitment to ethical AI practices. The future is AI-powered, and the time to prepare is now.
    `,
  },
  {
    id: 2,
    slug: "zero-trust-architecture-guide",
    title: "Zero Trust Architecture: A Complete Implementation Guide",
    excerpt: "Learn how to implement zero trust security principles to protect your organization from modern cyber threats.",
    author: "James Miller",
    role: "Security Architect",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    content: `
## What is Zero Trust?

Zero Trust is a security framework based on the principle of "never trust, always verify." Unlike traditional perimeter-based security, Zero Trust assumes that threats can come from anywhere—inside or outside the network.

## Core Principles

### 1. Verify Explicitly

Always authenticate and authorize based on all available data points:
- User identity
- Location
- Device health
- Service or workload
- Data classification
- Anomalies

### 2. Use Least Privilege Access

Limit user access with Just-In-Time (JIT) and Just-Enough-Access (JEA):
- Time-limited permissions
- Risk-based adaptive policies
- Data protection controls

### 3. Assume Breach

Minimize blast radius and segment access:
- Micro-segmentation
- End-to-end encryption
- Analytics and threat detection

## Implementation Roadmap

### Phase 1: Identity Foundation (Months 1-3)
- Deploy multi-factor authentication
- Implement single sign-on
- Establish identity governance

### Phase 2: Device Trust (Months 4-6)
- Deploy endpoint detection and response
- Implement device compliance policies
- Enable conditional access

### Phase 3: Network Segmentation (Months 7-9)
- Implement micro-segmentation
- Deploy software-defined perimeter
- Enable network access control

### Phase 4: Data Protection (Months 10-12)
- Classify sensitive data
- Implement data loss prevention
- Enable encryption everywhere

## Key Technologies

- **Identity Providers**: Okta, Azure AD, Ping Identity
- **Endpoint Security**: CrowdStrike, Carbon Black, Microsoft Defender
- **Network Security**: Zscaler, Palo Alto Prisma, Cloudflare
- **SIEM/SOAR**: Splunk, Microsoft Sentinel, Chronicle

## Conclusion

Zero Trust is not a product but a strategy. Success requires executive sponsorship, cross-functional collaboration, and a phased approach. Start with identity, build incrementally, and continuously improve your security posture.
    `,
  },
  {
    id: 3,
    slug: "kubernetes-best-practices",
    title: "Kubernetes Best Practices for Production Workloads",
    excerpt: "Essential strategies for running reliable, scalable, and secure containerized applications in production.",
    author: "Alex Thompson",
    role: "DevOps Lead",
    date: "Dec 3, 2024",
    readTime: "10 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80",
    content: `
## Introduction

Kubernetes has become the de facto standard for container orchestration. However, running production workloads requires careful attention to reliability, security, and operational excellence.

## Resource Management

### Set Resource Requests and Limits

Always define CPU and memory requests and limits for your containers:

\`\`\`yaml
resources:
  requests:
    memory: "256Mi"
    cpu: "250m"
  limits:
    memory: "512Mi"
    cpu: "500m"
\`\`\`

### Use Horizontal Pod Autoscaling

Configure HPA to automatically scale based on metrics:
- CPU utilization
- Memory usage
- Custom metrics

## High Availability

### Pod Disruption Budgets

Ensure minimum availability during updates:
\`\`\`yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: app-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: myapp
\`\`\`

### Anti-Affinity Rules

Spread pods across nodes and zones for resilience.

## Security Best Practices

1. **Use Network Policies**: Restrict pod-to-pod communication
2. **Enable RBAC**: Implement least privilege access
3. **Scan Images**: Check for vulnerabilities before deployment
4. **Use Pod Security Standards**: Enforce security contexts
5. **Encrypt Secrets**: Use external secret management

## Observability

### The Three Pillars

- **Metrics**: Prometheus + Grafana for monitoring
- **Logs**: Fluentd/Fluent Bit + Elasticsearch/Loki
- **Traces**: Jaeger or Zipkin for distributed tracing

## Conclusion

Production Kubernetes requires investment in tooling, processes, and expertise. Start with the basics, automate everything, and continuously improve your platform.
    `,
  },
  {
    id: 4,
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Optimization: Saving 40% on Your AWS Bill",
    excerpt: "Practical techniques and tools to reduce cloud spending without sacrificing performance or reliability.",
    author: "Emily Rodriguez",
    role: "Cloud Solutions Architect",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    content: `
## The Cloud Cost Challenge

Cloud costs can quickly spiral out of control without proper governance. Many organizations overspend by 30-40% on cloud services. This guide provides actionable strategies to optimize your AWS spending.

## Right-Sizing Instances

### Analyze Utilization

Use AWS Cost Explorer and Compute Optimizer to identify:
- Over-provisioned instances
- Idle resources
- Underutilized storage

### Action Items
1. Downsize instances with <40% CPU utilization
2. Use Graviton processors for 40% better price-performance
3. Consider burstable instances for variable workloads

## Reserved Instances and Savings Plans

### Commitment Options

- **Reserved Instances**: Up to 72% savings for steady-state workloads
- **Savings Plans**: Flexible pricing with up to 66% savings
- **Spot Instances**: Up to 90% savings for fault-tolerant workloads

### Recommendation
Start with Compute Savings Plans for flexibility, then add Reserved Instances for predictable workloads.

## Storage Optimization

1. **S3 Lifecycle Policies**: Automatically transition to cheaper storage classes
2. **EBS Optimization**: Use gp3 instead of gp2, delete unused volumes
3. **Data Transfer**: Use VPC endpoints, CloudFront caching

## Automation and Governance

### Implement Tagging Strategy
- Cost allocation tags for showback/chargeback
- Environment tags for lifecycle management
- Owner tags for accountability

### Auto-Scaling
- Scale down non-production environments
- Implement scheduled scaling
- Use predictive scaling for known patterns

## Tools and Services

- **AWS Cost Explorer**: Built-in cost analysis
- **AWS Budgets**: Alerts and actions
- **Third-Party**: CloudHealth, Spot.io, Kubecost

## Quick Wins

1. Delete unused Elastic IPs
2. Terminate idle load balancers
3. Remove old snapshots and AMIs
4. Review and clean up unused security groups

## Conclusion

Cloud cost optimization is an ongoing process, not a one-time project. Build a FinOps culture, implement automation, and continuously review your spending.
    `,
  },
  {
    id: 5,
    slug: "data-pipelines-apache-kafka",
    title: "Building Scalable Data Pipelines with Apache Kafka",
    excerpt: "A deep dive into designing event-driven architectures that handle millions of events per second.",
    author: "Michael Chang",
    role: "Data Engineer",
    date: "Nov 25, 2024",
    readTime: "12 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80",
    content: `
## Why Apache Kafka?

Apache Kafka is the backbone of modern data architectures, enabling real-time data streaming at massive scale. It's used by companies like LinkedIn, Netflix, and Uber to process trillions of events daily.

## Core Concepts

### Topics and Partitions
- Topics organize messages by category
- Partitions enable parallelism and scalability
- Choose partition count based on throughput requirements

### Producers and Consumers
- Producers write messages to topics
- Consumers read from topics in consumer groups
- Consumer groups enable horizontal scaling

## Design Patterns

### Event Sourcing
Store state changes as a sequence of events:
- Complete audit trail
- Replay capability
- Temporal queries

### CQRS
Separate read and write models for optimal performance.

### Saga Pattern
Manage distributed transactions across microservices.

## Best Practices

### Schema Management
- Use Avro or Protobuf for schema definition
- Deploy Schema Registry for compatibility checks
- Version your schemas

### Monitoring
Key metrics to track:
- Consumer lag
- Throughput (bytes/second)
- Partition distribution
- Error rates

## Production Considerations

1. **Replication**: Use replication factor of 3 minimum
2. **Retention**: Balance storage costs with replay needs
3. **Compression**: Enable compression for cost savings
4. **Security**: Implement SSL/TLS and SASL authentication

## Kafka Connect

Use Kafka Connect for:
- Database CDC (Change Data Capture)
- Cloud service integration
- File system sync
- Search index updates

## Conclusion

Kafka is powerful but complex. Start simple, understand the fundamentals, and scale as needed. Invest in monitoring and operations from day one.
    `,
  },
  {
    id: 6,
    slug: "edge-computing-iot",
    title: "The Rise of Edge Computing in IoT Applications",
    excerpt: "How edge computing is transforming IoT deployments with faster processing and reduced latency.",
    author: "Lisa Park",
    role: "IoT Solutions Lead",
    date: "Nov 20, 2024",
    readTime: "5 min read",
    category: "Industry News",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    content: `
## The Edge Computing Revolution

Edge computing brings computation and data storage closer to where it's needed, reducing latency and bandwidth usage. For IoT applications, this is transformative.

## Why Edge Matters for IoT

### Latency Reduction
- Cloud round-trip: 100-500ms
- Edge processing: <10ms
- Critical for real-time applications

### Bandwidth Optimization
Process data locally, send only insights to cloud:
- 90%+ reduction in data transfer
- Lower connectivity costs
- Works with intermittent connectivity

### Privacy and Compliance
Keep sensitive data on-premise:
- GDPR compliance
- Data sovereignty
- Reduced attack surface

## Use Cases

### Industrial IoT
- Predictive maintenance
- Quality control
- Safety monitoring

### Autonomous Vehicles
- Real-time object detection
- Path planning
- V2X communication

### Smart Retail
- Inventory management
- Customer analytics
- Checkout automation

### Healthcare
- Patient monitoring
- Medical imaging
- Emergency response

## Architecture Patterns

### Fog Computing
Multiple edge nodes with local coordination.

### Cloudlet
Mini data centers at network edge.

### Mobile Edge Computing (MEC)
Processing at cellular network edge.

## Challenges

1. **Device Management**: Managing thousands of edge devices
2. **Security**: Securing distributed infrastructure
3. **Updates**: Deploying updates at scale
4. **Monitoring**: Observability across edge fleet

## Getting Started

1. Identify latency-sensitive use cases
2. Evaluate edge hardware options
3. Design for offline operation
4. Implement robust device management
5. Plan for hybrid cloud-edge architecture

## Conclusion

Edge computing is not replacing cloud—it's extending it. The future is hybrid, with workloads distributed across cloud, edge, and devices based on requirements.
    `,
  },
  {
    id: 7,
    slug: "mlops-production",
    title: "MLOps: Bridging the Gap Between Data Science and Production",
    excerpt: "Best practices for deploying, monitoring, and maintaining machine learning models at scale.",
    author: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
    content: `
## The MLOps Challenge

87% of machine learning models never make it to production. MLOps—the practice of deploying and maintaining ML systems—bridges this gap.

## MLOps Principles

### 1. Version Everything
- Code (Git)
- Data (DVC, Delta Lake)
- Models (MLflow, Weights & Biases)
- Experiments (tracking, comparison)

### 2. Automate Pipelines
CI/CD for ML includes:
- Data validation
- Model training
- Model validation
- Deployment
- Monitoring

### 3. Monitor Continuously
Track in production:
- Model performance (accuracy, latency)
- Data drift
- Feature drift
- Prediction distribution

## ML Pipeline Components

### Feature Store
Centralized repository for ML features:
- Consistency between training and serving
- Feature reuse across models
- Point-in-time correctness

### Model Registry
Track model lifecycle:
- Model versions
- Stage transitions (dev → staging → production)
- Lineage and metadata

### Serving Infrastructure
Options for model deployment:
- REST APIs (Flask, FastAPI)
- Batch inference (Spark, Airflow)
- Real-time streaming (Kafka, Flink)
- Edge deployment (TensorFlow Lite, ONNX)

## Best Practices

### 1. Start Simple
- Begin with batch inference
- Use managed services when possible
- Iterate based on requirements

### 2. Treat Models as Products
- Define SLAs
- Monitor business metrics
- Plan for retraining

### 3. Embrace Experimentation
- A/B testing for models
- Shadow deployments
- Gradual rollouts

## Tools and Platforms

- **Experiment Tracking**: MLflow, Weights & Biases, Neptune
- **Feature Store**: Feast, Tecton, Databricks
- **Orchestration**: Kubeflow, Airflow, Prefect
- **Serving**: Seldon, KServe, SageMaker
- **Monitoring**: Evidently, WhyLabs, Arize

## Conclusion

MLOps is essential for realizing value from ML investments. Build incrementally, automate relentlessly, and monitor everything. The goal is not just deployment—it's continuous improvement.
    `,
  },
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button className="gradient-cta text-accent-foreground rounded-full">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container-custom pt-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
          <ArrowLeft size={18} />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Category */}
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center">
                  <User size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-sm text-muted-foreground">{post.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="font-display text-2xl font-bold mt-10 mb-4 text-foreground">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="font-display text-xl font-semibold mt-8 mb-3 text-foreground">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-muted-foreground ml-4 mb-2">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                }
                if (paragraph.startsWith('```')) {
                  return null;
                }
                if (paragraph.trim() === '') {
                  return null;
                }
                if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ') || paragraph.startsWith('5. ')) {
                  return (
                    <li key={index} className="text-muted-foreground ml-4 mb-2 list-decimal">
                      {paragraph.replace(/^\d+\.\s/, '')}
                    </li>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="rounded-full">
                  <ThumbsUp size={16} className="mr-2" />
                  Helpful
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Bookmark size={16} className="mr-2" />
                  Save
                </Button>
              </div>
              <Button variant="outline" size="sm" className="rounded-full">
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <h2 className="font-display text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="glass-card rounded-2xl overflow-hidden group"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold mt-2 group-hover:text-accent transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
