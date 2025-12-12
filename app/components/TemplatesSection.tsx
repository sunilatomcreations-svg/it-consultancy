export default function TemplatesSection() {
  const templates = [
    {
      image: 'https://img.icons8.com/fluency/400/agile.png',
      title: 'Agile Project Template',
      description: 'Downloadable Excel template for Agile project tracking.',
    },
    {
      image: 'https://img.icons8.com/fluency/400/cloud.png',
      title: 'Cloud Cost Calculator',
      description: 'Template to estimate your cloud infrastructure costs.',
    },
    {
      image: 'https://img.icons8.com/fluency/400/security-checked.png',
      title: 'Security Audit Checklist',
      description: 'Comprehensive checklist for cybersecurity audits.',
    },
  ];

  return (
    <section className="mt-12 px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((tpl, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={tpl.image} alt={tpl.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{tpl.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{tpl.description}</p>
              <button className="mt-4 bg-purple-600 text-white px-3 py-1 rounded">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}