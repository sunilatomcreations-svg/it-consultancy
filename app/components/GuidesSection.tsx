export default function GuidesSection() {
  const guides = [
    {
      image: 'https://img.icons8.com/fluency/400/cloud.png',
      title: 'Cloud Migration Checklist',
      description: 'A step-by-step guide to ensure a smooth cloud migration.',
    },
    {
      image: 'https://img.icons8.com/fluency/400/artificial-intelligence.png',
      title: 'AI in Cybersecurity',
      description: 'Whitepaper on leveraging AI for advanced threat detection.',
    },
    {
      image: 'https://img.icons8.com/fluency/400/devops.png',
      title: 'DevOps Best Practices',
      description: 'An eBook outlining key practices for DevOps success.',
    },
  ];

  return (
    <section className="mt-12 px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Guides & Downloads</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guides.map((guide, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={guide.image} alt={guide.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{guide.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{guide.description}</p>
              <button className="mt-4 bg-green-600 text-white px-3 py-1 rounded">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}